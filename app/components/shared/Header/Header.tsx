// Styles
import styles from "./Header.module.css";

// Types
import { Dictionary } from "@/@types/i18n";
import classNames from "classnames";

interface HeaderProps {
	withAnimation: boolean;
	dictionary: Dictionary;
}

export default function Header({
	dictionary,
	withAnimation = true,
}: HeaderProps) {
	return (
		<header className={styles["header-container"]}>
			<h1
				className={classNames({
					[styles["header-title"]]: true,
					[styles["with-animation"]]: withAnimation,
				})}
			>
				<span className={styles["first-line"]}>
					{dictionary.header.whoAreYou}
				</span>
				<span className={styles["second-line"]}>GAME OF THRONES</span>
			</h1>
		</header>
	);
}