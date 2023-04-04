// Components
import Header from "@/app/components/views/Home/components/Header";
import Ornaments from "@/app/components/views/Home/components/Ornaments";
import LocaleSwitcher from "@/app/components/views/Home/components/LocaleSwitcher";
import Button from "@/app/components/shared/Button";

// Types
import { Dictionary, Locale } from "@/@types/i18n";

// Styles
import styles from "./Home.module.css";

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
				{dictionary.header.ctaText}
			</Button>
			<LocaleSwitcher currentLocale={currentLocale} />
		</section>
	);
}
