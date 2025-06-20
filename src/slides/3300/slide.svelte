<script lang="ts">
	import { CLEAR } from '$lib/ansi.js';
	import Editor from '$lib/Editor.svelte';
	import { bundle } from '$lib/rollup';
	import type Terminal from '$lib/Terminal.svelte';

	let code = $state(
		`<div color="green">This should be green
	<span color="red">and this red</span>
</div>`
	);

	let terminal = $state<ReturnType<typeof Terminal>>();

	$effect(() => {
		if (terminal) {
			terminal.fit_addon.fit();
			terminal.term.write(`${CLEAR}$: `);
		}
	});

	function stop() {
		if (cleanup) {
			cleanup();
			cleanup = undefined;
		}
		if (terminal) {
			queueMicrotask(() => {
				terminal!.term.write(`${CLEAR}$:`);
			});
		}
	}

	let cleanup: (() => void) | undefined = $state();
</script>

<main class="grid w-[80vw] grid-cols-[40%_60%] content-center gap-4">
	<Editor
		bind:value={code}
		language="svelte"
		theme="github-dark"
		oninput={() => {
			stop();
		}}
	></Editor>
	{#await import("$lib/Terminal.svelte") then Terminal}
		<Terminal.default
			bind:this={terminal}
			title="svelte"
			started={!!cleanup}
			onstop={() => {
				stop();
			}}
			onstart={async () => {
				if (terminal && code) {
					const start = (await bundle(code))?.start;
					if (start) {
						cleanup = start(terminal.term);
					}
				}
			}}
		/>
	{/await}
</main>
