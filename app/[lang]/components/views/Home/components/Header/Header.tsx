// Styles
import styles from "./Header.module.css";

// Types
import { Dictionary } from "@/@types/i18n";

export default function Header({ dictionary }: { dictionary: Dictionary }) {
	return (
		<header className={styles["header-container"]}>
			<h1 className={styles["header-title"]}>
				<span className={styles["first-line"]}>
					{dictionary.header.whoAreYou}
				</span>
				<span className={styles["second-line"]}>GAME OF THRONES</span>
			</h1>
			<p className={styles["find-out"]}>{dictionary.header.takeTheTest}</p>
		</header>
	);
}
