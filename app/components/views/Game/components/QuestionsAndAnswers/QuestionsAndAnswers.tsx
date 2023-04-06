"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import classNames from "classnames";

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
	// Refs
	const questionRef = useRef<HTMLParagraphElement>(null);
	const answerRef = useRef<HTMLParagraphElement>(null);

	// Contexts
	const { game } = useGameContext();

	// Derived
	const question = questions[game.currentQuestion];
	const answer = answers[game.currentQuestion][game.currentAnswer].text;

	// Effects
	useEffect(() => {
		const questionElement = questionRef.current;
		const answerElement = answerRef.current;

		if (game.currentAnswer === 5) {
			questionElement?.classList.remove(styles["question-enter"]);
			answerElement?.classList.remove(styles["answer-enter"]);

			return () => {
				questionElement?.classList.add(styles["question-enter"]);
				answerElement?.classList.add(styles["answer-enter"]);
			};
		}
	}, [game.currentAnswer, question]);

	if (game.status === "FINISHED") {
		return null;
	}

	return (
		<article className={styles.container}>
			<p
				className={classNames({
					[styles.question]: true,
					[styles["question-enter"]]: true,
				})}
				ref={questionRef}
			>
				{question}
			</p>
			<p
				className={classNames({
					[styles.answer]: true,
					[styles["answer-enter"]]: true,
				})}
				ref={answerRef}
			>
				{answer}
			</p>
		</article>
	);
}
