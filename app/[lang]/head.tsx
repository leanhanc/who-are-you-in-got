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
			<meta
				name="description"
				content="How to do i18n in Next.js 13 within app directory"
			/>
			<link rel="icon" href="/favicon.ico" />
		</>
	)
}
