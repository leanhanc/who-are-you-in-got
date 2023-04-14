// Types
import { Reducer } from "react";
import { CharacterId } from "@/@types/character";

// Utils
import { characters } from "@/app/lib/characters";
import { getResult } from "@/app/lib/result";

export interface GameState {
	characterScore: {
		[characters.jon.id]: number;
		[characters.petyr.id]: number;
		[characters.daenerys.id]: number;
		[characters.cersei.id]: number;
		[characters.sansa.id]: number;
		[characters.tyrion.id]: number;
	};
	currentQuestion: number;
	currentAnswer: number;
	status: "IN_PROGRESS" | "FINISHED";
	result: string;
}

export const initialGameState: GameState = {
	characterScore: {
		[characters.jon.id]: 0,
		[characters.daenerys.id]: 0,
		[characters.petyr.id]: 0,
		[characters.cersei.id]: 0,
		[characters.sansa.id]: 0,
		[characters.tyrion.id]: 0,
	},
	currentQuestion: 0,
	currentAnswer: 0,
	status: "IN_PROGRESS",
	result: "",
};

export type GameAction = {
	type: "answer" | "advance";
	payload?: {
		character?: CharacterId;
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
					[action.payload.character]:
						state.characterScore[action.payload.character] +
						action.payload?.scoreChange,
				},
			};
		case "advance": {
			if (
				state.currentQuestion === 3 &&
				state.currentAnswer ===
					Object.keys(initialGameState.characterScore).length - 1
			) {
				// Handle all answers given for all questions
				return {
					...state,
					result: getResult(state.characterScore),
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
