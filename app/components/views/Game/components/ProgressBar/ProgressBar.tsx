"use client";

// Context
import useGameContext from "@/app/components/views/Game/Game.context";

// Styles
import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
	// Context
	const { game } = useGameContext();

	// Derived
	const currentStep = 6 * game.currentQuestion + game.currentAnswer;
	const currentCompletionPercent = Math.floor((currentStep * 100) / 24);

	if (game.status === "FINISHED") {
		return null;
	}

	return (
		<progress max={24} value={currentStep} className={styles.bar}>
			{`${currentCompletionPercent}%`}
		</progress>
	);
}
