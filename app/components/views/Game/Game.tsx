// Components

import Button from "@/app/components/shared/Button";

// Types
import { Dictionary } from "@/@types/i18n";

// Styles
import styles from "./Game.module.css";
import Header from "@/app/components/shared/Header";

interface HomeProps {
	dictionary: Dictionary;
}

export default function Home({ dictionary }: HomeProps) {
	return (
		<section className={styles.game}>
			<Header dictionary={dictionary} withAnimation={false} />
		</section>
	);
}
