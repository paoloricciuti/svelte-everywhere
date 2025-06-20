<script lang="ts">
	import '../styles/app.css';
	import '@xterm/xterm/css/xterm.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Svelte Everywhere</title>
</svelte:head>

{@render children()}
