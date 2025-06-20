<script lang="ts">
	import { Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

<Code
	class="overflow-hidden"
	bind:this={code}
	code={`class HTMLCompatibleNode {
	#node;
	constructor(node: Node) {
		this.#node = node;
	}

	append(node: HTMLCompatibleNode) {
		renderer.insert(this.#node, node.#node);
	}
}
`}
	theme="github-dark"
	lang="javascript"
/>
