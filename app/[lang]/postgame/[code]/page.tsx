// Utils
import { CharacterId } from "@/@types/character";
import Button from "@/app/components/shared/Button";
import Postgame from "@/app/components/views/Postgame";
import { characters, getCharactersNamesFromIds } from "@/app/lib/characters";

export default function PostgamePage({
	params: { code },
}: {
	params: { code: string };
}) {
	const possibleIds = ["1", "2", "3", "4", "5", "6"];
	const ids = code.split("") as CharacterId[];

	const validCode =
		ids.length === 3 && ids.every((id) => possibleIds.includes(id));

	if (!validCode) {
		return (
			<div className="error-container">
				<p>Error: código de resultado inválido</p>
				<Button variant="shinny" href="/game">
					Volver
				</Button>
			</div>
		);
	}

	const characterList = getCharactersNamesFromIds(ids, characters);

	if (!characterList.length) {
		return null;
	}

	return (
		<main>
			<Postgame characterList={characterList} />
		</main>
	);
}
