<script lang="ts" module>
	import { autoscroll } from '$lib';
	import { Action, Code, defineProps } from '@animotion/core';
	let code: ReturnType<typeof Code>;
	let main: HTMLElement;

	let scroll = $state(false);

	export const props = defineProps({
		out() {
			scroll = false;
		}
	});
</script>

<Action
	do={() => {
		code.selectToken`append`;
		scroll = true;
	}}
	undo={() => {
		code.selectLines`*`;
		scroll = false;
	}}
/>

<main
	{@attach autoscroll(scroll)}
	bind:this={main}
	class="h-[70%] overflow-auto scroll-smooth rounded-3xl"
>
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
