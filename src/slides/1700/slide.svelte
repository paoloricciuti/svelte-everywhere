<script lang="ts">
	import { Action, Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

<Action
	do={() => {
		code.selectLines`5`;
	}}
	undo={() => {
		code.selectLines`*`;
	}}
/>

<Action
	do={() => {
		code.selectLines`8`;
	}}
	undo={() => {
		code.selectLines`5`;
	}}
/>

<Action
	do={() => {
		code.selectLines`10`;
	}}
	undo={() => {
		code.selectLines`8`;
	}}
/>

<main class="grid gap-4 text-3xl">
	<Code
		class="w-full"
		code={`<h1 id="svelte-is-awesome">Svelte is Awesome</h1>`}
		theme="github-dark"
		lang="svelte"
	/>

	<Code
		bind:this={code}
		code={`import 'svelte/internal/disclose-version';
import 'svelte/internal/flags/legacy';
import * as $ from 'svelte/internal/client';

var root = $.from_html(\`<h1 id="svelte-is-awesome">Svelte is Awesome</h1>\`);

export default function App($$anchor) {
	var h1 = root();

	$.append($$anchor, h1);
}`}
		theme="github-dark"
		lang="javascript"
	/>
</main>
