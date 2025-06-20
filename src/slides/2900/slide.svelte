<script lang="ts">
	import { Action, Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

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

<Action
	do={() => {
		code.update`import 'svelte/internal/disclose-version';
import 'svelte/internal/flags/legacy';
import * as $ from 'svelte/internal/custom';
import $renderer from 'your-custom-renderer-module';

var root = $.from_tree([
	[
		'h1',
		{ id: 'svelte-is-awesome' },
		'Svelte is Awesome'
	]
]);

export default function App($$anchor) {
	var $$pop_renderer = $.push_renderer($renderer);
	var h1 = root();

	$.append($$anchor, h1);
	$$pop_renderer();
}`;
	}}
	undo={() => {
		code.update`import 'svelte/internal/disclose-version';
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
}`;
	}}
/>

<Action
	do={() => {
		code.selectLines`3`;
	}}
	undo={() => {
		code.selectLines`*`;
	}}
/>

<Action
	do={() => {
		code.selectLines`4`;
	}}
	undo={() => {
		code.selectLines`3`;
	}}
/>

<Action
	do={() => {
		code.selectLines`15`;
	}}
	undo={() => {
		code.selectLines`4`;
	}}
/>

<Action
	do={() => {
		code.selectLines`19`;
	}}
	undo={() => {
		code.selectLines`15`;
	}}
/>

<Action
	do={() => {
		code.selectLines`3`;
	}}
	undo={() => {
		code.selectLines`19`;
	}}
/>
