// @ts-ignore
import { compile } from 'svelte-future/compiler';
import output from './output.js?raw';

const ANCHOR = `console.log("$$REMOVE_HERE$$")`;

export async function bundle(code: string) {
	const generated = compile(
		`<script module>
	${ANCHOR}
</script>${code}`,
		{
			customRenderer: 'renderer'
		}
	).js.code as string;
	const clean = generated
		.slice(generated.indexOf(ANCHOR) + ANCHOR.length)
		.replaceAll('$.if', 'if_block')
		.replaceAll('$.', '');
	const module = output.replace(`console.log('$$REPLACE_HERE$$');`, clean);
	const u = URL.createObjectURL(new File([module], 'name.js', { type: 'application/javascript' }));
	return import(/* @vite-ignore */ u);
}
