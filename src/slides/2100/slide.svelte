<script lang="ts" module>
	import { autoscroll } from '$lib';
	import { Action, Code, defineProps } from '@animotion/core';
	let code: ReturnType<typeof Code>;

	let scroll = $state(false);

	export const props = defineProps({
		out() {
			scroll = false;
		}
	});
</script>

<Action
	do={() => {
		scroll = true;
	}}
	undo={() => {
		scroll = false;
	}}
/>

<main {@attach autoscroll(scroll)} class="h-[70%] overflow-auto scroll-smooth rounded-3xl">
	<Code
		bind:this={code}
		options={{
			lineNumbers: true
		}}
		code={`import { createRenderer } from "svelte/renderer";
		
export default createRenderer({
	createFragment() {
		// handle createFragment
	},
	createElement(name) {
		// handle createElement
	},
	createTextNode(data) {
		// handle createTextNode
	},
	setAttribute(element, key, value) {
		// handle setAttribute
	},
	setText(node, text) {
		// handle setText
	},
	createComment(data) {
		// handle createComment
	},
	getFirstChild(element) {
		// handle getFirstChild
	},
	getNextSibling(element) {
		// handle getNextSibling
	},
	insert(parent, element, anchor) {
		// handle insert
	},
	remove(node) {
		// handle remove
	},
	getParent(element) {
		// handle getParent
	},
});
`}
		theme="github-dark"
		lang="javascript"
	/>
</main>

<style>
	main::-webkit-scrollbar {
		display: none;
	}
</style>
