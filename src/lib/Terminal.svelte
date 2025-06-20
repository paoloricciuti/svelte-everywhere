<script lang="ts">
	import { terminal } from './terminal.js';

	const { attach, term, fit_addon } = terminal();
	let {
		title,
		onstart,
		onstop,
		started
	}: { title: string; onstart?: () => void; onstop?: () => void; started?: boolean } = $props();

	export { term, fit_addon };
</script>

<div class="terminal-window">
	<div class="terminal-header">
		<div class="traffic-lights">
			<div class="traffic-light close"></div>
			<div class="traffic-light minimize"></div>
			<div class="traffic-light maximize"></div>
			<button
				onclick={() => {
					if (started) {
						onstop?.();
					} else {
						onstart?.();
					}
				}}
				aria-label="start"
			>
				{#if started}
					<svg
						class="started"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="4 4 16 16"
						width="12"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="4 4 16 16"
						width="12"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
						/>
					</svg>
				{/if}
			</button>
		</div>
		<div class="terminal-title">{title}</div>
	</div>
	<div {@attach attach} class="terminal-content" id="terminal-container"></div>
</div>

<style>
	.terminal-window {
		position: relative;
		max-width: 800px;
		width: 100%;
		margin: 0 auto;
		background: #1e2029;
		border-radius: 8px;
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
		overflow: hidden;
		border: 1px solid #444;
	}

	.terminal-header {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #1a1a1a;
	}

	.traffic-lights {
		display: flex;
		gap: 8px;
		align-items: baseline;
	}

	.traffic-light {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		cursor: pointer;
		transition: opacity 0.2s ease;
	}

	.traffic-light.close {
		background: #ff5f57;
	}

	.traffic-light.minimize {
		background: #ffbd2e;
	}

	.traffic-light.maximize {
		background: #28ca42;
	}

	.traffic-light:hover {
		opacity: 0.8;
	}

	.terminal-title {
		color: #ccc;
		font-size: 13px;
		font-weight: 500;
		position: absolute;
		left: 50%;
		opacity: 0.4;
		transform: translateX(-50%);
		user-select: none;
	}

	.terminal-content {
		background: #1a1a1a;
		min-height: 400px;
		color: #00ff00;
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
		font-size: 14px;
		line-height: 1.4;
		position: relative;
	}

	/* Optional: Add a subtle inner shadow for depth */
	.terminal-content::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 20px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent);
		pointer-events: none;
	}
	button {
		all: unset;
		cursor: pointer;
		color: limegreen;
		line-height: 0;
	}
	.started {
		color: tomato;
	}
</style>
