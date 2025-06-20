<script lang="ts">
	import { Notes, Transition } from '@animotion/core';
</script>

<Notes>Specify that there's a lot of stuff but it is absolutely doable.</Notes>

<main class="relative grid aspect-video w-[90vw] grid-cols-1 grid-rows-1 place-items-center">
	<div>Finish writing the runtime</div>
	<Transition class="[--rotate:-12]">Define the `createRenderer` APIs</Transition>
	<Transition class="[--rotate:4]">Make sure it's flexible for all use cases</Transition>
	<Transition class="[--rotate:-7]">Add a bunch of tests</Transition>
	<Transition class="[--rotate:-4]">Get feedback from the community</Transition>
	<Transition class="[--rotate:5]">Conquer the world!!! 😈</Transition>
	<Transition class="[--rotate:-8]">REFACTOR!</Transition>
</main>

<style>
	main > :global(*) {
		grid-row: 1 / -1;
		grid-column: 1 / -1;
		padding: 1.5rem;
		border-radius: 1rem;
		color: black;
		rotate: calc(var(--rotate) * 1deg);
		border: 5px solid #ff3e00;
		background-color: color-mix(in oklab, var(--color-orange-200) 90%, transparent);
	}
</style>
