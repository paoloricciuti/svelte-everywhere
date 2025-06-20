<script module lang="ts">
	import { Action, defineProps } from '@animotion/core';
	import interest from './state-of-js-interest.png';
	import usage from './state-of-js-usage.png';

	let flip = $state(false);

	export const props = defineProps({
		out() {
			flip = false;
		}
	});
</script>

<Action
	do={() => {
		flip = true;
	}}
	undo={() => {
		flip = false;
	}}
/>

<main class={['absolute grid w-[65%] rounded-2xl bg-[#272325] p-8', { flip }]}>
	<img
		class="col-span-full row-span-full h-full w-full object-contain"
		src={interest}
		alt="State of JS 2024"
	/>
	<img
		class="col-span-full row-span-full h-full w-full object-contain"
		src={usage}
		alt="State of JS 2024"
	/>
</main>

<style>
	main {
		transform-style: preserve-3d;
		transition: transform 500ms;
	}
	.flip {
		transform: rotateX(-180deg);
	}
	img {
		backface-visibility: hidden;
	}
	img:last-child {
		transform: rotateX(-180deg);
	}
</style>
