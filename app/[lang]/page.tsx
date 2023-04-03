// Components
import Home from "@/app/[lang]/components/views/Home";

// Utils
import { getDictionary } from "@/i18n/get-dictionary";

// Types
import { Locale } from "@/@types/i18n";

export default async function IndexPage({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);

	return (
		<main>
			<Home dictionary={dictionary} currentLocale={lang || "en"} />
		</main>
	);
}
