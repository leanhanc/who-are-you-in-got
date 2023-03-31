import NextImage from "next/image";

// Components
import LocaleSwitcher from "./components/locale-switcher";

// Config
import { Locale } from "@/i18n/i18n-config";

// Utils
import { getDictionary } from "@/i18n/get-dictionary";
import Home from "@/app/[lang]/components/views/Home";

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
