import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<h1 style={{ display: "flex", flexDirection: "column" }}>
				<span>QUIEN SOS EN</span>
				<span>GAME OF TRHONES</span>
			</h1>
		</header>
	);
}
