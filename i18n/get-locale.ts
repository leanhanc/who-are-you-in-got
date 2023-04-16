import { Locale } from "@/@types/i18n";

export default function getLocaleFromPath(pathName: URL["pathname"]): Locale {
	if (!pathName) {
		return "en";
	}
	const paths = pathName.split("/");

	if (!paths.length) {
		return "en";
	}

	return paths[1] as Locale;
}
