// Types
import { Character } from "@/@types/character";
import { Locale } from "@/@types/i18n";

// Components
import Button from "@/app/components/shared/Button";
import Postgame from "@/app/components/views/Postgame";

// Utils
import {
	characters as charactersData,
	validateResultCode,
	getCharactersFromResultCode,
} from "@/app/lib/characters";
import { getDictionary } from "@/i18n/get-dictionary";

interface PostgameProps {
	params: {
		code: string;
		lang: Locale;
	};
}

export default async function PostgamePage({
	params: { code, lang },
}: PostgameProps) {
	const hasValidCode = validateResultCode(code);
	if (!hasValidCode) {
		return (
			<div className="error-container">
				<p>Error: código de resultado inválido</p>
				<Button variant="shinny" href="/game">
					Volver
				</Button>
			</div>
		);
	}

	const characters = getCharactersFromResultCode(
		code,
		charactersData
	) as Character[];
	const dictionary = await getDictionary(lang);
	const secondMostAlikeDifference = Number(code.split("").at(-1));

	return (
		<main>
			<Postgame
				characters={characters}
				dictionary={dictionary}
				secondMostAlikeDifference={secondMostAlikeDifference}
			/>
		</main>
	);
}
