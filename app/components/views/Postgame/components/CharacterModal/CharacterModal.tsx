// Styles
import styles from "./CharacterModal.module.css";

// Types
import { PropsWithChildren } from "react";

interface CharacterModal extends PropsWithChildren {
	onClose: () => void;
}

export default function CharacterModal({ children, onClose }: CharacterModal) {
	return (
		<article className={styles.modal}>
			<div aria-hidden className={styles.background}>
				{children}
			</div>
		</article>
	);
}
