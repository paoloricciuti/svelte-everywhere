<script module lang="ts">
	import { defineProps, Transition } from '@animotion/core';
	let step = $state(0);

	export const props = defineProps({
		out() {
			step = 0;
		}
	});
</script>

<Transition
	do={() => {
		step = 1;
	}}
	undo={() => {
		step = 0;
	}}
/>
<Transition
	do={() => {
		step = 2;
	}}
	undo={() => {
		step = 1;
	}}
/>

{#snippet arrow(direction: 'up' | 'down' = 'down')}
	<svg
		height="6rem"
		class={{ 'rotate-180': direction === 'up' }}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 500 500"
	>
		<g id="Capa_1" transform="matrix(1, 0, 0, 1, -276.081573, -27.92663)">
			<g transform="matrix(1, 0, 0, 1, 294.631409, 55.380154)">
				<g>
					<path
						fill="currentColor"
						d="M 260.591 312.317 C 259.98 308.645 255.083 306.197 251.411 307.421 C 248.35 308.646 244.679 309.869 241.007 311.093 C 259.366 289.673 248.351 230.921 247.128 207.665 C 244.067 155.033 241.007 101.789 234.274 49.769 C 233.051 41.813 222.647 41.813 222.034 49.769 C 218.362 95.057 226.319 142.181 229.38 186.857 C 231.827 224.801 239.171 270.701 228.767 308.033 C 228.156 309.869 228.767 311.705 229.992 313.541 C 224.484 314.153 218.363 314.153 212.855 313.541 C 205.511 312.317 201.839 321.497 206.736 325.169 C 188.988 333.125 217.752 386.369 223.871 397.386 C 226.32 402.282 234.889 402.894 237.336 397.386 C 248.352 372.293 257.531 346.589 261.203 319.049 C 262.427 315.989 261.815 313.54 260.591 312.317 Z M 218.362 345.365 C 217.751 343.529 215.303 331.289 211.632 326.393 C 220.812 328.229 234.275 329.453 244.679 326.393 C 241.618 342.916 236.111 358.216 230.603 374.128 C 225.706 364.336 222.034 355.157 218.362 345.365 Z"
					></path>
				</g>
			</g>
		</g>
	</svg>
{/snippet}

{#snippet renderer(renderer: string, produces: string)}
	<p style:view-transition-name="renderer">
		{renderer}
	</p>
	<div>
		{@render arrow()}
	</div>
	<p style:view-transition-name="produces">
		{produces}
	</p>
{/snippet}

<main class="grid w-[50vw] place-items-center gap-4 font-mono">
	<p>React</p>
	<div class="flex items-center justify-center gap-2">
		{@render arrow()}
		{@render arrow('up')}
	</div>
	{#if step === 0}
		{@render renderer('ReactDOM', 'HTML')}
	{:else if step === 1}
		{@render renderer('ReactNative', 'Native UI')}
	{:else if step === 2}
		{@render renderer('Ink', 'Terminal')}
	{/if}
</main>

<style>
	:root::view-transition-new(renderer) {
		animation: slide-in 500ms ease-in-out;
	}
	:root::view-transition-old(renderer) {
		animation: slide-out 500ms ease-in-out;
	}
	:root::view-transition-new(produces) {
		animation: slide-in 500ms ease-in-out;
	}
	:root::view-transition-old(produces) {
		animation: slide-out 500ms ease-in-out;
	}
	@keyframes slide-in {
		from {
			transform: translateX(200%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes slide-out {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(-200%);
			opacity: 0;
		}
	}
	p {
		width: 100%;
		padding: 2rem;
		outline: 1px solid currentColor;
		border-radius: 0.5rem;
	}
</style>
