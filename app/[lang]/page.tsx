// Components
import Home from "@/app/[lang]/components/views/Home";
import LocaleSwitcher from "./components/locale-switcher";

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
			<Home dictionary={dictionary} />
		</main>
	);
}
