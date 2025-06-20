<script module lang="ts">
	import { defineProps } from '@animotion/core';

	import meme from './meme.jpg';

	export const props = defineProps({
		image: meme,
		class: 'w-full h-full'
	});
</script>

<main class="grid h-full w-full p-8">
	<p>Svelte</p>
	<p class="self-end">Svelte, everywhere</p>
</main>

<style>
	p {
		font-family: 'Impact';
		text-transform: uppercase;
		font-size: 5rem;
		text-shadow:
			-2px -2px 0 #000,
			2px -2px 0 #000,
			-2px 2px 0 #000,
			2px 2px 0 #000;
	}
</style>
