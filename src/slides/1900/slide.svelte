<script lang="ts">
	import { Action, Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

<Action
	do={() => {
		code.selectLines`5-11`;
	}}
	undo={() => {
		code.selectLines`*`;
	}}
/>

<Code
	bind:this={code}
	code={`import 'svelte/internal/disclose-version';
import 'svelte/internal/flags/legacy';
import * as $ from 'svelte/internal/client';

var root = $.from_tree([
	[
		'h1',
		{ id: 'svelte-is-awesome' },
		'Svelte is Awesome'
	]
]);

export default function App($$anchor) {
	var h1 = root();

	$.append($$anchor, h1);
}`}
	theme="github-dark"
	lang="javascript"
/>
