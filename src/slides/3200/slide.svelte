<script lang="ts">
	import { scroll_to_line } from '$lib';
	import { Action, Code, Notes } from '@animotion/core';
	let code: ReturnType<typeof Code>;
	let main: HTMLElement;
</script>

<Notes>ANSI escape code shenanigans.</Notes>

<Action
	do={() => {
		code.selectLines`3-16`;
		scroll_to_line(main, 2, 20);
	}}
	undo={() => {
		code.selectLines`*`;
		scroll_to_line(main, 1);
	}}
/>

<Action
	do={() => {
		code.selectLines`18-24`;
		scroll_to_line(main, 18);
	}}
	undo={() => {
		code.selectLines`3-16`;
		scroll_to_line(main, 2, 20);
	}}
/>

<Action
	do={() => {
		code.selectLines`26-34`;
		scroll_to_line(main, 26);
	}}
	undo={() => {
		code.selectLines`18-24`;
		scroll_to_line(main, 18);
	}}
/>

<Action
	do={() => {
		code.selectLines`36-46`;
		scroll_to_line(main, 36);
	}}
	undo={() => {
		code.selectLines`26-34`;
		scroll_to_line(main, 26);
	}}
/>

<Action
	do={() => {
		code.selectLines`49-61`;
		scroll_to_line(main, 49);
	}}
	undo={() => {
		code.selectLines`36-46`;
		scroll_to_line(main, 36);
	}}
/>

<Action
	do={() => {
		code.selectLines`62-75`;
		scroll_to_line(main, 62);
	}}
	undo={() => {
		code.selectLines`49-61`;
		scroll_to_line(main, 49);
	}}
/>

<Action
	do={() => {
		code.selectLines`76-84`;
		scroll_to_line(main, 76);
	}}
	undo={() => {
		code.selectLines`62-75`;
		scroll_to_line(main, 62);
	}}
/>

<Action
	do={() => {
		code.selectLines`85-93`;
		scroll_to_line(main, 85);
	}}
	undo={() => {
		code.selectLines`76-84`;
		scroll_to_line(main, 76);
	}}
/>

<Action
	do={() => {
		code.selectLines`94-97`;
		scroll_to_line(main, 94);
	}}
	undo={() => {
		code.selectLines`85-93`;
		scroll_to_line(main, 85);
	}}
/>

<Action
	do={() => {
		code.selectLines`98-103`;
		scroll_to_line(main, 98);
	}}
	undo={() => {
		code.selectLines`94-97`;
		scroll_to_line(main, 94);
	}}
/>

<Action
	do={() => {
		code.selectLines`104-106`;
		scroll_to_line(main, 104);
	}}
	undo={() => {
		code.selectLines`98-103`;
		scroll_to_line(main, 98);
	}}
/>

<Action
	do={() => {
		code.selectLines`107-109`;
		scroll_to_line(main, 107);
	}}
	undo={() => {
		code.selectLines`104-106`;
		scroll_to_line(main, 104);
	}}
/>

<Action
	do={() => {
		code.selectLines`112`;
		scroll_to_line(main, 112);
	}}
	undo={() => {
		code.selectLines`107-109`;
		scroll_to_line(main, 107);
	}}
/>

<Action
	do={() => {
		code.selectLines`113-123`;
		scroll_to_line(main, 113);
	}}
	undo={() => {
		code.selectLines`112`;
		scroll_to_line(main, 112);
	}}
/>

<Action
	do={() => {
		code.selectLines`123-132`;
		scroll_to_line(main, 123);
	}}
	undo={() => {
		code.selectLines`113-123`;
		scroll_to_line(main, 113);
	}}
/>

<Action
	do={() => {
		code.selectLines`134-141`;
		scroll_to_line(main, 134);
	}}
	undo={() => {
		code.selectLines`123-132`;
		scroll_to_line(main, 123);
	}}
/>

<Action
	do={() => {
		code.selectLines`142-144`;
		scroll_to_line(main, 142);
	}}
	undo={() => {
		code.selectLines`134-141`;
		scroll_to_line(main, 134);
	}}
/>

<main bind:this={main} class="h-[70%] overflow-auto scroll-smooth rounded-3xl">
	<Code
		bind:this={code}
		options={{
			lineNumbers: true
		}}
		code={`import { createRenderer } from 'svelte/renderer';

const ESC = '\\u001b[';
// Clear screen and move cursor to top-left
const CLEAR = ESC + '2J' + ESC + '0;0H';

const colors = {
	red: ESC + '31m',
	green: ESC + '32m',
	yellow: ESC + '33m',
	blue: ESC + '34m',
	magenta: ESC + '35m',
	cyan: ESC + '36m',
	white: ESC + '37m',
	reset: ESC + '0m',
};

let top_fragment;

let current_string = '';

export function set_top_fragment(fragment) {
	top_fragment = fragment;
}

function render_element(element) {
	if (element.attributes?.color) {
		current_string += colors[element.attributes.color];
	}
	element.render?.();
	if (element.attributes?.color) {
		current_string += colors.reset;
	}
}

let scheduled = false;

function schedule_render() {
	if (!scheduled) {
		scheduled = true;
		queueMicrotask(() => {
			top_fragment.render();
			scheduled = false;
		});
	}
}

export default createCustomRenderer({
	createFragment() {
		return {
			kind: 'fragment',
			render() {
				console.log(CLEAR);
				for (let child of this.children ?? []) {
					render_element(child);
				}
				console.log(current_string);
				current_string = '';
			},
		};
	},
	createElement(name) {
		return {
			kind: 'element',
			tag: name,
			render() {
				if (this.tag === 'div') {
					current_string += '\\n';
				}
				for (let child of this.children ?? []) {
					render_element(child);
				}
			},
		};
	},
	createTextNode(data) {
		return {
			kind: 'text',
			value: data,
			render() {
				current_string += this.value;
			},
		};
	},
	setAttribute(element, key, value) {
		element.attributes ??= {};
		if (value === null || value === undefined) {
			delete element.attributes[key];
		} else {
			element.attributes[key] = value;
		}
		schedule_render();
	},
	setText(node, text) {
		node.value = text;
		schedule_render();
	},
	createComment(data) {
		return {
			kind: 'anchor',
			value: data,
		};
	},
	getFirstChild(element) {
		return element.children?.[0];
	},
	getNextSibling(element) {
		const idx = element.parent.children.findIndex((el) => el === element);
		return element.parent.children[idx + 1];
	},
	insert(parent, element, anchor) {
		parent.children ??= [];
		if (element.kind === 'fragment') {
			for (let child of element.children) {
				const idx = parent.children.findIndex((el) => el === anchor);
				parent.children.splice(
					idx !== -1 ? idx : parent.children.length,
					0,
					child
				);
				child.parent = parent;
			}
		} else {
			const idx = parent.children.findIndex((el) => el === anchor);
			parent.children.splice(
				idx !== -1 ? idx : parent.children.length,
				0,
				element
			);
			element.parent = parent;
		}
		schedule_render();
	},
	remove(node) {
		if (!node) return;
		const parent = node.parent;
		if (parent) {
			parent.children = parent.children.filter((el) => el !== node);
		}
		schedule_render();
	},
	getParent(element) {
		return element.parent;
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
