// Styles
import styles from "./CharacterModal.module.css";

// Assets
import Parchment from "@/public/images/parchment.webp";

// Types
import { PropsWithChildren } from "react";

export default function CharacterModal({ children }: PropsWithChildren) {
	return (
		<article className={styles.modal}>
			<div aria-hidden className={styles.background}>
				{children}
			</div>
		</article>
	);
}
