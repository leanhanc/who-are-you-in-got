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

export function getCharactersNamesFromIds(
	ids: CharacterId[],
	characters: Characters
) {
	const characterNames = ids.map((id) => {
		return Object.values(characters).find((character) => character.id === id);
	});

	return characterNames;
}
