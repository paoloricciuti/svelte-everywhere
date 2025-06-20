<script lang="ts">
	import { Transition } from '@animotion/core';
	import can_i from './can-i.gif';
	import not_so_fast from './not-so-fast.gif';
</script>

<img
	class="w-[70vw] rounded-2xl object-contain"
	src={can_i}
	alt="Jim Carrey saying 'Oh boy, can i?'"
/>

<Transition>
	<img
		class="absolute inset-0 h-full w-full object-contain"
		src={not_so_fast}
		alt="a meme of a bear saying 'Not so fast!'"
	/>
</Transition>
