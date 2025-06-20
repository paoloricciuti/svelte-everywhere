<script module lang="ts">
	import { defineProps } from '@animotion/core';
	import correct from './correct.gif';

	export const props = defineProps({
		image: correct,
		class: 'inset-0'
	});
</script>
