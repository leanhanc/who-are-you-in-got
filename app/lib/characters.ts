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

export function getCharactersFromCode(code: string, characterData: Characters) {
	const ids = code.split("") as CharacterId[];
	const characters = ids.map((id) => {
		return Object.values(characterData).find(
			(character) => character.id === id
		);
	});

	return characters as Partial<Characters>[];
}

export function validateResultCode(code: string) {
	const possibleIds = ["1", "2", "3", "4", "5", "6"];
	const ids = code.split("") as CharacterId[];

	const hasValidCode =
		ids.length === 3 && ids.every((id) => possibleIds.includes(id));

	return hasValidCode;
}
