<script lang="ts">
	import { Action, Code } from '@animotion/core';

	let code: ReturnType<typeof Code>;
</script>

<Action
	do={() => {
		code.selectLines`1-3`;
	}}
	undo={() => {
		code.selectLines`*`;
	}}
/>

<Action
	do={() => {
		code.selectLines`5-7`;
	}}
	undo={() => {
		code.selectLines`1-3`;
	}}
/>

<Action
	do={() => {
		code.selectLines`9-15`;
	}}
	undo={() => {
		code.selectLines`5-7`;
	}}
/>

<Code
	bind:this={code}
	theme="github-dark"
	lang="svelte"
	code={`
<s` +
		`cript>
	let count = $state(0);
</script>

<button onclick={()=> count++}>
	{count}
</button>

<s` +
		`tyle>
	button{
		background-color: #ff3e00;
		color: white;
		border-radius: 1rem;
	}
</style>
`}
/>
