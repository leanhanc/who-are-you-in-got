// Components
import LocaleSwitcher from "./components/locale-switcher"

// Config
import { Locale } from "@/i18n/i18n-config"

// Utils
import { getDictionary } from "@/i18n/get-dictionary"

export default async function IndexPage({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const dictionary = await getDictionary(lang)

	return (
		<main>
			<LocaleSwitcher />
			<h1>Current locale: {lang}</h1>
			<p>
				This text is rendered on the server:{" "}
				{dictionary["server-component"].welcome}
			</p>
		</main>
	)
}
