export const ESC = '\u001b[';
// Clear screen and move cursor to top-left
export const CLEAR = ESC + '2J' + ESC + '1;1H';

export const colors = {
	red: ESC + '31m',
	green: ESC + '32m',
	yellow: ESC + '33m',
	blue: ESC + '34m',
	magenta: ESC + '35m',
	cyan: ESC + '36m',
	white: ESC + '37m',
	reset: ESC + '0m'
};
