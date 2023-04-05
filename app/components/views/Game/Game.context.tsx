"use client";

import {
	createContext,
	Dispatch,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";

// Reducer
import gameReducer, {
	GameAction,
	GameState,
	initialGameState,
} from "@/app/components/views/Game/Game.reducer";

/* Using undefined here is OK. We check for it in the useGameContext hook so there is no need to do it
when consuming the context. Source:
	https://kentcdodds.com/blog/how-to-use-react-context-effectively#typescript
*/
const GameContext = createContext<
	| {
			game: GameState;
			dispatch: Dispatch<GameAction>;
	  }
	| undefined
>(undefined);

export function GameProvider({ children }: PropsWithChildren) {
	const [game, dispatch] = useReducer(gameReducer, initialGameState);

	return (
		<GameContext.Provider value={{ game, dispatch }}>
			{children}
		</GameContext.Provider>
	);
}

export default function useGameContext() {
	const context = useContext(GameContext);

	if (context === undefined) {
		throw new Error("useGameContext must be used within a GameProvider");
	}
	return context;
}
