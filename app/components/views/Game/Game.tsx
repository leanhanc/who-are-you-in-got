// Components
import Header from "@/app/components/shared/Header";
import QuestionsAndAnswers from "@/app/components/views/Game/components/QuestionsAndAnswers";
import ButtonPanel from "@/app/components/views/Game/components/ButtonPanel";
import ProgressBar from "@/app/components/views/Game/components/ProgressBar";

// Context Providers
import { GameProvider } from "@/app/components/views/Game/Game.context";

// Types
import { Dictionary } from "@/@types/i18n";

// Styles
import styles from "./Game.module.css";

interface GameProps {
	dictionary: Dictionary;
}

export default function Game({ dictionary }: GameProps) {
	return (
		<section className={styles.game}>
			<Header dictionary={dictionary} withAnimation={false} />
			<GameProvider>
				<QuestionsAndAnswers
					questions={dictionary.questions}
					answers={dictionary.answers}
				/>
				<ButtonPanel
					possibleResponses={dictionary.possibleResponses}
					answers={dictionary.answers}
					seeResults={dictionary.seeResults}
				/>
				<ProgressBar />
			</GameProvider>
		</section>
	);
}
