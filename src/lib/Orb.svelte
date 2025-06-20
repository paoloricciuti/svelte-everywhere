<script lang="ts">
	import { browser } from '$app/environment';
	import { getPresentation } from '@animotion/core';

	let size = $state(0);
	let x = $state<number>();
	let y = $state<number>();

	if (browser) {
		move_orb();
	}

	function move_orb() {
		size = (Math.random() * 30 + 30 * window.innerWidth) / 100;
		x = (Math.random() * 100 * window.innerWidth) / 100;
		y = (Math.random() * 100 * window.innerHeight) / 100;
	}

	const presentation = getPresentation();
	$effect(() => {
		if (!presentation.slides) return;

		const controller = new AbortController();

		presentation.slides.on(
			'slidechanged',
			() => {
				move_orb();
			},
			{
				signal: controller.signal
			}
		);
		return () => {
			controller.abort();
		};
	});
</script>

<div style:--size={size} style:--x="{x}px" style:--y="{y}px" class="orb"></div>

<style>
	.orb {
		width: 1px;
		aspect-ratio: 1;
		background-color: #ff3e00;
		position: fixed;
		top: 0;
		left: 0;
		filter: blur(0.9px);
		transform: translateX(var(--x)) translateY(var(--y)) scale(var(--size));
		transition: transform 350ms;
		pointer-events: none;
	}
</style>
