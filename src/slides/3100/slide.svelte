<script lang="ts">
	import { Action, Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

<Code
	class="text-xl!"
	bind:this={code}
	codes={[
		`<text color="green">This should be green
	<inline-text color="red">and this red</inline-text>
</text>`,
		`<div color="green">This should be green
	<span color="red">and this red</span>
</div>`
	]}
	theme="github-dark"
	lang="svelte"
/>
