<script module lang="ts">
	import { Action, defineProps } from '@animotion/core';
	import screenshot from './screenshot.png';
	import { on } from 'svelte/events';

	let zoomed = $state(false);

	export const props = defineProps({
		out() {
			zoomed = false;
		}
	});
</script>

<Action
	undo={() => {
		zoomed = false;
	}}
	do={() => {
		zoomed = true;
	}}
/>

<main class="h-[calc(100%_-_5%)] w-full overflow-hidden rounded-3xl">
	<img
		class={['h-full w-full', { zoomed }]}
		src={screenshot}
		alt="Screenshot of the svelte.dev website"
	/>
</main>

<style>
	img {
		transition: transform 1s;
		transform-origin: 20% 89%;
	}
	.zoomed {
		transform: scale(2.5);
	}
</style>
