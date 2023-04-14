// Types
import { Characters, CharacterId } from "@/@types/character";

export const characters = {
	jon: { id: "1", name: "Jon Snow" },
	petyr: { id: "2", name: "Petyr Baelish" },
	daenerys: { id: "3", name: "Daenerys Targaryen" },
	cersei: { id: "4", name: "Cersei Lannister" },
	sansa: { id: "5", name: "Sansa Stark" },
	tyrion: { id: "6", name: "Tyrion Lannister" },
} as const;

export function getCharactersFromResultCode(
	code: string,
	characterData: Characters
) {
	const ids = code.split("") as CharacterId[];
	const characters = ids.slice(0, 3).map((id) => {
		return Object.values(characterData).find(
			(character) => character.id === id
		);
	});

	return characters as Partial<Characters>[];
}

export function validateResultCode(code: string) {
	const possibleValues = ["0", "1", "2", "3", "4", "5", "6"];
	const values = code.split("") as CharacterId[];

	const hasValidCode =
		values.length === 4 &&
		values.every((value) => possibleValues.includes(value));

	return hasValidCode;
}
