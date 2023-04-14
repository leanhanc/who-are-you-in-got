// Components
import Header from "@/app/components/shared/Header";

// Styles
import styles from "./FullResults.module.css";

// Types
import { Dictionary } from "@/@types/i18n";
import { Character } from "@/@types/character";
import { getSecondMostAlikeSimilarity } from "@/app/lib/result";
import Button from "@/app/components/shared/Button";

interface FullResultsProps {
	dictionary: Dictionary;
	mostAlike: Character;
	secondMostAlike: Character;
	leastAlike: Character;
	secondMostAlikeDifference: number;
}

export default function FullResults({
	dictionary,
	mostAlike,
	secondMostAlike,
	leastAlike,
	secondMostAlikeDifference,
}: FullResultsProps) {
	const { fullResults, header } = dictionary;
	const secondMostAlikeSimilarity = getSecondMostAlikeSimilarity(
		secondMostAlikeDifference,
		dictionary.fullResults
	);

	return (
		<section className={styles["full-results"]}>
			<Header dictionary={header} withAnimation={false} />
			<div className={styles["extra-feedback"]}>
				<p>
					{fullResults.youAre}
					<span className={styles.primary}>{mostAlike.name}.</span>
				</p>

				<p>
					{fullResults.canAlsoTellYou} {secondMostAlikeSimilarity}
					<span className={styles.primary}>{secondMostAlike.name} </span>
					{fullResults.unlike}{" "}
					<span className={styles.secondary}>{leastAlike.name}</span>.
				</p>
			</div>

			<footer className={styles.buttons}>
				<Button variant="outlined">SHARE IN TWITTER</Button>
				<Button variant="outlined">SHARE IN WHATSAPP</Button>
				<Button variant="shinny" href="/game">
					TAKE TEST AGAIN
				</Button>
			</footer>
		</section>
	);
}
