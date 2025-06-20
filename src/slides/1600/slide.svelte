<script module lang="ts">
	import { defineProps } from '@animotion/core';
	import settled from './settled.gif';

	export const props = defineProps({
		image: settled,
		class: 'inset-0'
	});
</script>
