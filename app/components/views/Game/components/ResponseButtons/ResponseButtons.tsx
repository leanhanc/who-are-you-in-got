// Components
import Button from "@/app/components/shared/Button";

// Types
import { Dictionary } from "@/@types/i18n";

// Styles
import styles from "./ResponseButtons.module.css";

interface ResponseButtonsProps {
	possibleResponses: Dictionary["possibleResponses"];
}

export default function ResponseButtons({
	possibleResponses,
}: ResponseButtonsProps) {
	return (
		<menu className={styles.buttons}>
			<Button variant="outlined">{possibleResponses.stronglyAgree}</Button>
			<Button variant="outlined">{possibleResponses.agree}</Button>
			<Button variant="outlined">{possibleResponses.disagree}</Button>
			<Button variant="outlined">{possibleResponses.stronglyDisagree}</Button>
		</menu>
	);
}
