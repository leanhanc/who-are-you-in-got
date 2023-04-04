// Components
import Header from "@/app/components/shared/Header";
import Button from "@/app/components/shared/Button";

// Types
import { Dictionary } from "@/@types/i18n";

// Styles
import styles from "./Game.module.css";

interface GameProps {
	dictionary: Dictionary;
}

export default function Game({ dictionary }: GameProps) {
	return (
		<section className={styles.game}>
			<Header dictionary={dictionary} withAnimation={false} />
		</section>
	);
}
