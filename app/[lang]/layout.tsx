// Config
import { i18n } from "../../i18n/i18n-config";

// Styles
import "@/app/styles/reset.css";
import "@/app/styles/global.css";

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={params.lang}>
			<body>{children}</body>
		</html>
	);
}
