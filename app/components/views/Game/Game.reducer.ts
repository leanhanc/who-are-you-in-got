import { Reducer } from "react";

export interface GameState {
	characterScore: {
		cersei: number;
		daenerys: number;
		jon: number;
		petyr: number;
		sansa: number;
		tyrion: number;
	};
	currentQuestion: number;
	currentAnswer: number;
	status: "IN_PROGRESS" | "FINISHED";
}

export const initialGameState: GameState = {
	characterScore: {
		cersei: 0,
		daenerys: 0,
		jon: 0,
		petyr: 0,
		sansa: 0,
		tyrion: 0,
	},
	currentQuestion: 0,
	currentAnswer: 0,
	status: "IN_PROGRESS",
};

export type Character = keyof typeof initialGameState.characterScore;
export type GameAction = {
	type: "answer" | "advance" | "reset";
	payload?: {
		character?: Character;
		scoreChange?: 1 | 3 | -1 | -3;
	};
};

const gameReducer: Reducer<GameState, GameAction> = function (state, action) {
	switch (action.type) {
		case "answer":
			if (!action.payload?.character || !action.payload.scoreChange) {
				return state;
			}
			return {
				...state,
				characterScore: {
					...state.characterScore,
					[action.payload?.character]:
						state.characterScore[action.payload?.character] +
						action.payload?.scoreChange,
				},
			};
		case "advance": {
			if (
				state.currentQuestion === 3 &&
				state.currentAnswer ===
					Object.keys(initialGameState.characterScore).length
			) {
				// Handle all answers given for all questions
				return {
					...state,
					status: "FINISHED",
				};
			}
			if (
				state.currentAnswer ===
				Object.keys(initialGameState.characterScore).length - 1
			)
				// Handle all anwsers given for the current question, show next question
				return {
					...state,
					currentQuestion: state.currentQuestion + 1,
					currentAnswer: 0,
				};
			// Handle answer given, show next answer for the current question
			return {
				...state,
				currentAnswer: state.currentAnswer + 1,
			};
		}
		default:
			return state;
	}
};

export default gameReducer;
