"use client";

import { useRef } from "react";

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

	// Refs
	const elementToShare = useRef<HTMLDivElement>(null);

	// Handlers
	const shareInWhatsapp = () => {
		window.open(
			`https://api.whatsapp.com/send?text=${fullResults.shareStart}${elementToShare.current?.textContent}\n
			 ${fullResults.shareEnd}${window.location.origin}
			`,
			"_blank"
		);
	};

	const shareInTwitter = () => {
		window.open(
			`https://twitter.com/intent/tweet?url=${window.location.origin}&text=${fullResults.shareStart}"${elementToShare.current?.textContent}"`,
			"_blank"
		);
	};

	return (
		<section className={styles["full-results"]}>
			<Header dictionary={header} withAnimation={false} />
			<div
				className={styles["extra-feedback"]}
				ref={elementToShare}
				data-testid="extra-feedback"
			>
				<p>
					{fullResults.youAre}
					<span className={styles.primary}>{mostAlike.name}.</span>
				</p>

				<p>
					{fullResults.canAlsoTellYou}
					{secondMostAlikeSimilarity}
					<span className={styles.primary}>{secondMostAlike.name} </span>
					{fullResults.unlike}
					<span className={styles.secondary}>{leastAlike.name}</span>.
				</p>
			</div>

			<footer className={styles.buttons}>
				<Button variant="outlined" onClick={shareInWhatsapp}>
					{fullResults.whatsappShare}
				</Button>
				<Button variant="outlined" onClick={shareInTwitter}>
					{fullResults.twitterShare}
				</Button>
				<Button variant="shinny" href="/game">
					{fullResults.reset}
				</Button>
			</footer>
		</section>
	);
}
