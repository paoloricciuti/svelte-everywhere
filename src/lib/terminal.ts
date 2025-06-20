import { FitAddon } from '@xterm/addon-fit';
import { Terminal } from '@xterm/xterm';

export function terminal() {
	const term = new Terminal({
		theme: {
			background: '#1E2029'
		}
	});

	const fit_addon = new FitAddon();
	term.loadAddon(fit_addon);

	return {
		term,
		fit_addon,
		attach(node: HTMLElement) {
			term.open(node);
			fit_addon.fit();
		}
	};
}
