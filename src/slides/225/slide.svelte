<script lang="ts">
	import { Notes, Transition } from '@animotion/core';
	import qr from './qr.png';
</script>

<Notes
	>4 workshops, runs from the 21 to the 24th of July. The workshops are about:

	<ul>
		<li>Svelte without Svelte</li>
		<li>Testing</li>
		<li>Migrate to Svelte 5</li>
		<li>Authentication with Sveltekit</li>
	</ul>

	Save 25% with the code from 200ish to 160ish
</Notes>

<main class="relative">
	<img
		class="h-[90vh] rounded-2xl object-contain"
		src={qr}
		alt="A qr code to download and install Lynx explorer"
	/>
	<Transition
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-[#ff3e00] p-8 text-black"
		><code>LONDON25</code></Transition
	>
</main>
