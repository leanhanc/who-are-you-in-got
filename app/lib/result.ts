import { Dictionary } from "@/@types/i18n";

export function getResult(characterScore: { [key: string]: number }): string {
	if (!characterScore || !Object.keys(characterScore).length) return "";

	let keys = Object.keys(characterScore);
	keys.sort((a, b) => characterScore[b] - characterScore[a]);

	const secondMostAlikeDifference = Math.abs(
		Number(characterScore[keys[0]]) - Number(characterScore[keys[1]])
	);

	const result = `${keys[0]}${keys[1]}${
		keys[keys.length - 1]
	}${secondMostAlikeDifference}`;

	return result;
}

export function getSecondMostAlikeSimilarity(
	difference: number,
	dictionary: Dictionary["fullResults"]
) {
	if (difference === 0) {
		return dictionary.extremelySimilar;
	}
	if (difference === 1) {
		return dictionary.verySimilar;
	}
	if (difference === 2) {
		return dictionary.similar;
	}

	return dictionary.bitSimilar;
}
