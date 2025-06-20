<script module lang="ts">
	import { defineProps } from '@animotion/core';
	import fry from './fry.gif';

	export const props = defineProps({
		image: fry,
		class: 'inset-0'
	});
</script>
