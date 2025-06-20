<script lang="ts">
	import { Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

<Code
	class="overflow-hidden text-lg!"
	bind:this={code}
	codes={[
		`let renderer;

export function push_renderer(new_renderer){
	let old_renderer = renderer;
	renderer = new_renderer;
	return ()=>{
		renderer = old_renderer;
	};
}
`,
		`let renderer;

export function push_renderer(new_renderer){
	let old_renderer = renderer;
	renderer = new_renderer;
	return ()=>{
		renderer = old_renderer;
	};
}

export function create_fragment(){
	if(renderer){
		return renderer.createFragment();
	}
	return document.createDocumentFragment();
}

export function create_text(data){
	if(renderer){
		return renderer.createText(data);
	}
	return document.createTextNode(data);
}

// all the other methods...
`
	]}
	theme="github-dark"
	lang="javascript"
/>
