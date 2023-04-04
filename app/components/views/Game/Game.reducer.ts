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

export type GameAction = {
	type: "increment-score" | "decrement-score" | "finish" | "reset";
	payload?: {
		character: keyof typeof initialGameState.characterScore;
		response?:
			| "agreed"
			| "strongly-agreed"
			| "disagreed"
			| "strongly-disagreed";
	};
};

const gameReducer: Reducer<GameState, GameAction> = function (state, action) {
	switch (action.type) {
		default:
			return state;
	}
};

export default gameReducer;
