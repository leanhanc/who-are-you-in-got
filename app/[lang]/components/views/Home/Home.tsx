// Utils
import { getDictionary } from "@/i18n/get-dictionary";

interface HomeProps {
	dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function Home({ dictionary }: HomeProps) {
	return <main>{dictionary["server-component"].welcome}</main>;
}
