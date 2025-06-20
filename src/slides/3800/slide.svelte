<script module lang="ts">
	import { defineProps } from '@animotion/core';
	import thanks from './thanks.gif';

	export const props = defineProps({
		image: thanks,
		class: 'inset-0 grid place-items-center'
	});
</script>
