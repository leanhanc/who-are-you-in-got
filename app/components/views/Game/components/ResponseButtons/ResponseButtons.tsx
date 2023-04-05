"use client";

// Components
import Button from "@/app/components/shared/Button";

// Types
import { Dictionary } from "@/@types/i18n";

// Styles
import styles from "./ResponseButtons.module.css";

// Contexr
import useGameContext from "@/app/components/views/Game/Game.context";
import {
	Character,
	GameAction,
} from "@/app/components/views/Game/Game.reducer";

interface ResponseButtonsProps {
	possibleResponses: Dictionary["possibleResponses"];
	answers: Dictionary["answers"];
}

export default function ResponseButtons({
	possibleResponses,
	answers,
}: ResponseButtonsProps) {
	// Context
	const { game, dispatch } = useGameContext();

	// Derived state
	const answerAuthorCharacter = answers[game.currentQuestion][
		game.currentAnswer
	].author as Character;

	// Handlers
	const handleStronglyAgree = () => {
		dispatch({
			type: "answer",
			payload: {
				scoreChange: 3,
				character: answerAuthorCharacter,
			},
		});
		dispatch({
			type: "advance",
		});
	};
	const handleAgree = () => {
		dispatch({
			type: "answer",
			payload: {
				scoreChange: 1,
				character: answerAuthorCharacter,
			},
		});
		dispatch({
			type: "advance",
		});
	};

	const handleDisagree = () => {
		dispatch({
			type: "answer",
			payload: {
				scoreChange: -1,
				character: answerAuthorCharacter,
			},
		});
		dispatch({
			type: "advance",
		});
	};

	const handleStronglyDisagree = () => {
		dispatch({
			type: "answer",
			payload: {
				scoreChange: -3,
				character: answerAuthorCharacter,
			},
		});
		dispatch({
			type: "advance",
		});
	};

	return (
		<menu className={styles.buttons}>
			<Button variant="outlined" onClick={handleStronglyAgree}>
				{possibleResponses.stronglyAgree}
			</Button>
			<Button variant="outlined" onClick={handleAgree}>
				{possibleResponses.agree}
			</Button>
			<Button variant="outlined" onClick={handleDisagree}>
				{possibleResponses.disagree}
			</Button>
			<Button variant="outlined" onClick={handleStronglyDisagree}>
				{possibleResponses.stronglyDisagree}
			</Button>
		</menu>
	);
}
