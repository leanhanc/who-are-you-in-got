// Components
import Game from "@/app/components/views/Game";

// Utils
import { getDictionary } from "@/i18n/get-dictionary";

// Types
import { Locale } from "@/@types/i18n";

export default async function GamePage({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);

	return (
		<main>
			<Game dictionary={dictionary} />
		</main>
	);
}
