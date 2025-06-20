<script module lang="ts">
	import { defineProps } from '@animotion/core';
	import wild from './wild.gif';

	export const props = defineProps({
		image: wild,
		class: 'inset-0 grid place-items-center'
	});
</script>

<h1 class="bg-amber-50 font-mono text-9xl text-black">THE DOM IS WILD</h1>
