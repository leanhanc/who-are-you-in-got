import localFont from "next/font/local";
import classNames from "classnames";

// Config
import { i18n } from "../../i18n/i18n-config";

// Types
import { Locale } from "@/@types/i18n";

// Styles
import "@/app/styles/reset.css";
import "@/app/styles/global.css";

// Fonts
import { Cinzel, Inconsolata } from "next/font/google";
import { getDictionary } from "@/i18n/get-dictionary";

const cinzel = Cinzel({
	subsets: ["latin"],
	variable: "--cinzel",
	display: "swap",
});

const gotRegular = localFont({
	src: "../../public/fonts/GameOfThronesRegular.ttf",
	variable: "--got-regular",
	display: "swap",
});

const inconsolata = Inconsolata({
	subsets: ["latin"],
	variable: "--inconsolata",
});

// Generate Static Pages
export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

// Generate Metadata
export async function generateMetadata({
	params,
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(params.lang);

	return {
		title: dictionary.head.title,
		description: dictionary.head.description,
	};
}

export default function Root({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html
			lang={params.lang || "en"}
			className={classNames([
				cinzel.variable,
				gotRegular.variable,
				inconsolata.variable,
			])}
		>
			<body>{children}</body>
		</html>
	);
}
