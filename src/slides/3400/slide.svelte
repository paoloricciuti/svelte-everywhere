<script lang="ts">
	import { Transition } from '@animotion/core';
	import demo from './demo.webp';
	import qr from './qr.png';
</script>

<img
	class="h-[90vh] rounded-2xl object-contain"
	src={demo}
	alt="A video of the very first svelte + lynx todo app"
/>

<Transition class="absolute top-1/2 left-1/2 -translate-1/2 transform">
	<img
		class="h-[70vh] rounded-2xl object-contain"
		src={qr}
		alt="A qr code of a lynx bundle that can be scanned with Lynx explorer"
	/>
</Transition>
