"use client";

// Types
import { Dictionary } from "@/@types/i18n";

// Contexts
import useGameContext from "@/app/components/views/Game/Game.context";

// Styles
import styles from "./QuestionsAndAnswers.module.css";

interface QuestionsAndAnswersProps {
	questions: Dictionary["questions"];
	answers: Dictionary["answers"];
}

export default function QuestionsAndAnswers({
	questions,
	answers,
}: QuestionsAndAnswersProps) {
	const { game } = useGameContext();

	console.log({ game });

	return (
		<article className={styles.container}>
			<p className={styles.question}>{questions[game.currentQuestion]}</p>
			<p className={styles.answer}>
				{answers[game.currentQuestion][game.currentAnswer].text}
			</p>
		</article>
	);
}
