// Components
import Header from "@/app/[lang]/components/views/Home/components/Header";
import Ornaments from "@/app/[lang]/components/views/Home/components/Ornaments";
import LocaleSwitcher from "@/app/[lang]/components/views/Home/components/LocaleSwitcher";

// Types
import { Dictionary, Locale } from "@/@types/i18n";

// Styles
import styles from "./Home.module.css";
import Button from "@/app/[lang]/components/shared/Button";

interface HomeProps {
	dictionary: Dictionary;
	currentLocale: Locale;
}

export default function Home({ dictionary, currentLocale }: HomeProps) {
	return (
		<section className={styles.home}>
			<Ornaments />
			<Header dictionary={dictionary} />
			<Button
				variant="shinny"
				href="/game"
				animationDelay={4}
				margin="5rem auto"
			>
				COMENZAR
			</Button>
			<LocaleSwitcher currentLocale={currentLocale} />
		</section>
	);
}
