import type { Attachment } from 'svelte/attachments';

export function autoscroll(scroll: boolean): Attachment {
	return (node) => {
		if (scroll && node.scrollTop < node.scrollHeight - node.clientHeight) {
			const interval = setInterval(() => {
				console.log('scrolling', node.scrollTop, node.scrollHeight - node.clientHeight);
				node.scrollTo({ top: node.scrollTop + 1, behavior: 'smooth' });
				if (node.scrollTop + 10 >= node.scrollHeight - node.clientHeight) {
					clearInterval(interval);
				}
			}, 1);
			return () => {
				node.scrollTo({ top: 0, behavior: 'smooth' });
				clearInterval(interval);
			};
		}
		return () => {
			node.scrollTo({ top: 0, behavior: 'smooth' });
		};
	};
}

export function scroll_to_line(element: HTMLElement, line: number, offset = 70) {
	const lines = element.querySelectorAll('.shiki-magic-move-line-number');
	if (lines[line - 1]) {
		element.scrollTo({
			top: (lines[line - 1] as HTMLElement).offsetTop - offset,
			behavior: 'smooth'
		});
	}
}
