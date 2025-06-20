<script lang="ts">
	import { scroll_to_line } from '$lib';
	import { Action, Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
	let main: HTMLElement;
</script>

<Action
	do={() => {
		code.selectLines`2`;
		scroll_to_line(main, 2);
	}}
	undo={() => {
		code.selectLines`*`;
		scroll_to_line(main, 1);
	}}
/>

<Action
	do={() => {
		code.selectLines`5-8`;
		scroll_to_line(main, 5);
	}}
	undo={() => {
		code.selectLines`2`;
		scroll_to_line(main, 2);
	}}
/>

<Action
	do={() => {
		code.selectLines`10-13`;
		scroll_to_line(main, 10);
	}}
	undo={() => {
		code.selectLines`5-8`;
		scroll_to_line(main, 5);
	}}
/>

<Action
	do={() => {
		code.selectLines`15`;
		scroll_to_line(main, 15);
	}}
	undo={() => {
		code.selectLines`10-13`;
		scroll_to_line(main, 10);
	}}
/>

<Action
	do={() => {
		code.selectLines`17-19`;
		scroll_to_line(main, 17);
	}}
	undo={() => {
		code.selectLines`15`;
		scroll_to_line(main, 15);
	}}
/>

<Action
	do={() => {
		code.selectLines`21`;
		scroll_to_line(main, 21);
	}}
	undo={() => {
		code.selectLines`17-19`;
		scroll_to_line(main, 17);
	}}
/>

<Action
	do={() => {
		code.selectLines`23-25`;
		scroll_to_line(main, 23);
	}}
	undo={() => {
		code.selectLines`21`;
		scroll_to_line(main, 21);
	}}
/>

<Action
	do={() => {
		code.selectLines`28-31`;
		scroll_to_line(main, 28);
	}}
	undo={() => {
		code.selectLines`23-25`;
		scroll_to_line(main, 23);
	}}
/>

<Action
	do={() => {
		code.selectLines`33-38`;
		scroll_to_line(main, 33);
	}}
	undo={() => {
		code.selectLines`28-31`;
		scroll_to_line(main, 28);
	}}
/>

<Action
	do={() => {
		code.selectLines`41`;
		scroll_to_line(main, 41);
	}}
	undo={() => {
		code.selectLines`33-38`;
		scroll_to_line(main, 33);
	}}
/>

<Action
	do={() => {
		code.selectLines`44`;
		scroll_to_line(main, 44);
	}}
	undo={() => {
		code.selectLines`41`;
		scroll_to_line(main, 41);
	}}
/>

<main bind:this={main} class="h-[70%] overflow-auto scroll-smooth rounded-3xl">
	<Code
		bind:this={code}
		options={{
			lineNumbers: true
		}}
		code={`function fragment_from_tree(structure, ns) {
	var fragment = create_fragment();

	for (var item of structure) {
		if (typeof item === 'string') {
			fragment.append(create_text(item));
			continue;
		}

		if (item === undefined) {
			fragment.append(create_comment(''));
			continue;
		}

		const [name, attributes, ...children] = item;

		const namespace = name === 'svg' ? 
				NAMESPACE_SVG : name === 'math' ? 
					NAMESPACE_MATHML : ns;

		var element = create_element(name, namespace, attributes?.is);

		for (var key in attributes) {
			set_attribute(element, key, attributes[key]);
		}

		if (children.length > 0) {
			var target =
				element.tagName === 'TEMPLATE'
					? element.content
					: element;

			target.append(
				fragment_from_tree(
					children,
					element.tagName === 'foreignObject' ? undefined : namespace
				)
			);
		}

		fragment.append(element);
	}

	return fragment;
}`}
		theme="github-dark"
		lang="javascript"
	/>
</main>

<style>
	main::-webkit-scrollbar {
		display: none;
	}
</style>
