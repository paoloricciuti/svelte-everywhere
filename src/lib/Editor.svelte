<script lang="ts">
	import { createHighlighter } from 'shiki';
	import type { BuiltinLanguage, BuiltinTheme } from 'shiki';
	import { onMount } from 'svelte';

	let {
		value = $bindable(),
		language = 'javascript',
		theme = 'github-dark',
		oninput
	}: {
		value: string;
		language?: BuiltinLanguage;
		theme?: BuiltinTheme;
		oninput?: () => void;
	} = $props();

	let textarea = $state<HTMLTextAreaElement>();
	let highlighter = $state<Awaited<ReturnType<typeof createHighlighter>>>();
	let highlighted_code = $derived.by(() => {
		if (highlighter && value) {
			try {
				const ret = highlighter.codeToHtml(value, {
					lang: language,
					theme: theme,
					transformers: [
						{
							name: 'add-no-escape',
							code(hast) {
								hast.properties = {
									...hast.properties,
									'data-noescape': true
								};
							}
						}
					]
				});

				return ret;
			} catch (error) {}
		}
		return '';
	});
	let container = $state<HTMLElement>();

	// Initialize Shiki highlighter
	onMount(async () => {
		try {
			highlighter = await createHighlighter({
				themes: [theme],
				langs: [language]
			});
		} catch (error) {
			console.error('Failed to initialize Shiki:', error);
		}
	});

	// Sync scroll between textarea and highlighted code
	function sync_scroll() {
		if (textarea && container) {
			container.scrollTop = textarea.scrollTop;
			container.scrollLeft = textarea.scrollLeft;
		}
	}
</script>

<div class="editor-container">
	<div class="editor-wrapper">
		<!-- Syntax highlighted background -->
		<div bind:this={container} class="highlight-layer" onscroll={sync_scroll}>
			{@html highlighted_code}
		</div>

		<!-- Transparent textarea overlay -->
		<textarea
			bind:this={textarea}
			bind:value
			oninput={(event) => {
				value = event.currentTarget.value;
				sync_scroll();
				oninput?.();
			}}
			onscroll={() => {
				sync_scroll();
			}}
			onkeydown={(event) => {
				if (event.key === 'Tab') {
					event.preventDefault();
					const start = textarea?.selectionStart;
					const end = textarea?.selectionEnd;

					// Insert tab at cursor position
					value = value.substring(0, start) + '  ' + value.substring(end!);

					// Restore cursor position
					setTimeout(() => {
						textarea!.selectionStart = textarea!.selectionEnd = start! + 2;
					}, 0);
				}
			}}
			class="textarea-layer"
			spellcheck="false"
			autocomplete="off"
			autocapitalize="off"
		></textarea>
	</div>
</div>

<style>
	.editor-container {
		width: 100%;
		border: 1px solid #333;
		border-radius: 8px;
		overflow: hidden;
		background: #0d1117;
		font-family: 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
	}

	.editor-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.highlight-layer {
		padding: 0;
		position: absolute;
		inset: 0;
		overflow: auto;
		pointer-events: none;
		white-space: pre;
		font-size: 14px;
		line-height: 1.5;
		padding: 16px;
		padding-bottom: calc(16px + 1lh);
	}

	.highlight-layer :global(pre) {
		margin: 0;
		padding: 0;
		background: transparent !important;
		overflow: visible;
		white-space: pre;
		font-family: inherit;
		font-size: inherit;
		height: 100vmax;
		line-height: inherit;
	}

	.highlight-layer :global(code) {
		background: transparent !important;
		padding: 0;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		overflow: visible;
		height: 100vmax;
	}

	.highlight-layer :global(code > :last-child) {
		display: block;
		height: 1lh;
	}

	.textarea-layer {
		position: absolute;
		inset: 0;
		padding: 16px;
		margin: 0;
		border: none;
		outline: none;
		resize: none;
		background: transparent;
		color: transparent;
		caret-color: #58a6ff;
		font-family: inherit;
		font-size: 14px;
		line-height: 1.5;
		white-space: pre;
		overflow: auto;
		tab-size: 2;
		box-sizing: content-box;
		/* background-color: #fff3;
		color: black; */
	}

	.textarea-layer::selection {
		background: rgba(88, 166, 255, 0.3);
	}

	.textarea-layer::-webkit-scrollbar {
		width: 12px;
		height: 12px;
	}

	.textarea-layer::-webkit-scrollbar-track {
		background: #161b22;
	}

	.textarea-layer::-webkit-scrollbar-thumb {
		background: #30363d;
		border-radius: 6px;
	}

	.textarea-layer::-webkit-scrollbar-thumb:hover {
		background: #484f58;
	}
</style>
