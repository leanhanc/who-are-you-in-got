export function getResult(characterScore: { [key: string]: number }): string {
	let keys = Object.keys(characterScore);
	keys.sort((a, b) => characterScore[b] - characterScore[a]);
	let result = `${keys[0]}${keys[1]}${keys[keys.length - 1]}`;

	return result;
}
