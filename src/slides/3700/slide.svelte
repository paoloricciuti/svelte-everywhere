<script module lang="ts">
	import { defineProps } from '@animotion/core';
	import bernie from './bernie.gif';

	export const props = defineProps({
		image: bernie,
		class: 'inset-0 grid place-items-center'
	});
</script>
