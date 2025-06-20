<svelte:options runes />

<script lang="ts">
	import Orb from '$lib/Orb.svelte';
	import Presenter from '$lib/Presenter.svelte';
	import { Presentation, Slides } from '@animotion/core';

	console.log(
		Object.values(import.meta.glob('../slides/**/*.svelte', { eager: true, query: '?raw' }))
	);
</script>

<Orb />

<Presenter />

<Presentation
	options={{
		history: true,
		transition: 'slide',
		controls: true,
		progress: true,
		highlight: {
			highlightOnLoad: false,
			excapeHTML: false
		}
	}}
>
	<Slides center={true} />
</Presentation>
