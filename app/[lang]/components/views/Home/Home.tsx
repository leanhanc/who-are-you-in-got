// Components
import Header from "@/app/[lang]/components/views/Home/components/Header";
import Ornaments from "@/app/[lang]/components/views/Home/components/Ornaments";

// Types
import { Dictionary } from "@/@types/i18n";

// Styles
import styles from "./Home.module.css";

interface HomeProps {
	dictionary: Dictionary;
}

export default function Home({ dictionary }: HomeProps) {
	return (
		<section className={styles.home}>
			<Ornaments />
			<Header dictionary={dictionary} />
		</section>
	);
}
