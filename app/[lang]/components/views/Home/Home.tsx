// Components
import Header from "@/app/[lang]/components/views/Home/components/Header";
import Ornaments from "@/app/[lang]/components/views/Home/components/Ornaments";

// Utils
import { getDictionary } from "@/i18n/get-dictionary";

// Styles
import styles from "./Home.module.css";

interface HomeProps {
	dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function Home({ dictionary }: HomeProps) {
	return (
		<section className={styles.home}>
			<Ornaments />
			<Header />
		</section>
	);
}
