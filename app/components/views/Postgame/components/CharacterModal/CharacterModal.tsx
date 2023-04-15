// Types
import { PropsWithChildren } from "react";
import { Dictionary } from "@/@types/i18n";

// Styles
import styles from "./CharacterModal.module.css";

interface CharacterModal extends PropsWithChildren {
	onClose: () => void;
	common: Dictionary["common"];
}

export default function CharacterModal({
	children,
	onClose,
	common,
}: CharacterModal) {
	return (
		<div className={styles.modal} role="dialog">
			<button className={styles.close} onClick={onClose} title={common.close}>
				&times;
			</button>
			<article>{children}</article>
		</div>
	);
}
