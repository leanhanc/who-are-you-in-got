import { getDictionary } from "@/i18n/get-dictionary";
import { i18n } from "@/i18n/i18n-config";

export type Locale = typeof i18n["locales"][number];
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
