<script module lang="ts">
	import { Action, Code, defineProps, Notes } from '@animotion/core';
	import travolta from './travolta.gif';
	let code: ReturnType<typeof Code>;

	let showing = $state(false);

	export const props = defineProps({
		out() {
			showing = false;
		}
	});
</script>

<Action
	undo={() => {
		showing = false;
	}}
	do={() => {
		showing = true;
	}}
/>

<Notes>
	No matter how complex of an HTML string content is, this very simple code will just create all the
	elements with the right nesting, the right namespace (in HTML, you can have SVGs within the HTML,
	and those need to be created with the right namespace), and it will do so via the browser parser
	in a very performant way.
</Notes>

<main class="relative overflow-hidden">
	<Code
		bind:this={code}
		code={`function from_html(code){
	const template = document.createElement('template');
	template.innerHTML = code;
	return () => template.content.cloneNode(true);
	}`}
		theme="github-dark"
		lang="javascript"
	/>

	<img
		class={[
			'absolute top-0 left-1/3 transition-transform duration-1000',
			{
				'translate-y-full': !showing
			}
		]}
		src={travolta}
		alt="John Travolta meme"
	/>
</main>
