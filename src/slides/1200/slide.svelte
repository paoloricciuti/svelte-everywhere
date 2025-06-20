<script module lang="ts">
	import { Action, defineProps } from '@animotion/core';
	import { fade } from 'svelte/transition';
	import vue from './vue.png';
	import solid from './solid.png';

	let shown = $state(false);

	export const props = defineProps({
		out() {
			shown = false;
		}
	});
</script>

<Action
	undo={() => {
		shown = false;
	}}
	do={() => {
		shown = true;
	}}
/>

<img class="w-[70%] rounded-2xl object-contain" src={vue} alt="PR to add vue renderer to lynx" />
{#if shown}
	<img
		out:fade
		class="solid absolute w-[70%] rounded-2xl object-contain"
		src={solid}
		alt="PR to add solid renderer to lynx"
	/>
{/if}

<style>
	.solid {
		opacity: 1;
		transform: rotate(12deg);
		transition:
			transform 500ms,
			opacity 500ms;
		@starting-style {
			opacity: 0;
			transform: rotate(90deg);
		}
	}
</style>
