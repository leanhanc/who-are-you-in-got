// Styles
import styles from "./CharacterModal.module.css";

// Types
import { PropsWithChildren } from "react";

interface CharacterModal extends PropsWithChildren {
	onClose: () => void;
}

export default function CharacterModal({ children, onClose }: CharacterModal) {
	return (
		<div className={styles.modal}>
			<article>{children}</article>
		</div>
	);
}
