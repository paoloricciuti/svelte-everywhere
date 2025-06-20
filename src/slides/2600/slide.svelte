<script lang="ts">
	import { Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

<Code
	class="overflow-hidden"
	bind:this={code}
	codes={[
		`export function create_element(name){
	if(renderer){
		return renderer.createElement(name);
	}
	return document.createElement(name);
}
`,
		`export function create_element(name){
	if(renderer){
		return new HTMLCompatibleNode(renderer.createElement(name));
	}
	return document.createElement(name);
}
`
	]}
	theme="github-dark"
	lang="javascript"
/>
