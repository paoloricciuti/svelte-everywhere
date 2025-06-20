<script lang="ts">
	import { browser } from '$app/environment';

	function presenter(video: HTMLVideoElement) {
		(async () => {
			if (navigator.mediaDevices.getUserMedia) {
				try {
					const devices = await navigator.mediaDevices.enumerateDevices();
					const non_obs = devices.find(
						(device) => device.kind === 'videoinput' && !device.label.includes('OBS')
					);
					const stream = await navigator.mediaDevices.getUserMedia({
						video: non_obs
							? {
									deviceId: non_obs.deviceId
								}
							: true
					});
					video.srcObject = stream;
				} catch {
					/**empty*/
				}
			}
		})();
	}
	let top = $state(20);
	let left = $state(20);
	let scale = $state(1);
	let updating: null | { x: number; y: number } = $state(null);

	const active = browser && new URLSearchParams(window.location.search).get('presenter') !== null;
</script>

{#if active}
	<video
		onmousedown={(e) => {
			updating = {
				x: e.pageX,
				y: e.pageY
			};
		}}
		onmouseup={() => {
			updating = null;
		}}
		onmousemove={(e) => {
			if (!updating) return;
			const { pageX, pageY } = e;
			left += pageX - updating.x;
			top += pageY - updating.y;
			updating = {
				x: pageX,
				y: pageY
			};
		}}
		onwheel={(e) => {
			if (e.deltaY > 0) {
				scale += 0.1;
			} else {
				scale -= 0.1;
			}
		}}
		autoplay
		playsinline
		muted
		style:--top="{top}px"
		style:--left="{left}px"
		style:--scale={scale}
		class="fixed top-[var(--top)] left-[var(--left)] z-50 aspect-square w-1/5 scale-[var(--scale)] transform cursor-pointer rounded-full object-cover"
		use:presenter
	>
		<track kind="captions" />
	</video>
{/if}
