// Config
import { getDictionary } from "@/i18n/get-dictionary"

// Locale
import { Locale } from "@/i18n/i18n-config"

export default async function Head({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const dictionary = await getDictionary(lang)

	return (
		<>
			<title>{dictionary["head"]["title"]}</title>
			<meta name="description" content={dictionary["head"]["description"]} />
			<link rel="icon" href="/favicon.ico" />
		</>
	)
}
