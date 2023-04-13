// Components
import Button from "@/app/components/shared/Button";

// Types
import { Character } from "@/@types/character";
import { Dictionary } from "@/@types/i18n";

// Styles
import styles from "./CharacterProfile.module.css";

// Images
import Jon from "@/public/images/characters/jon.webp";
import Petyr from "@/public/images/characters/petyr.webp";
import Daenerys from "@/public/images/characters/daenerys.webp";
import Cersei from "@/public/images/characters/cersei.webp";
import Sansa from "@/public/images/characters/sansa.webp";
import Tyrion from "@/public/images/characters/tyrion.webp";

const characterImage = {
	"1": Jon,
	"2": Petyr,
	"3": Daenerys,
	"4": Cersei,
	"5": Sansa,
	"6": Tyrion,
};

interface CharacterProfileProps {
	character: Character;
	onContinuePressed: () => void;
	profiles: Dictionary["profiles"];
	common: Dictionary["common"];
}

export default function CharacterProfile({
	character,
	profiles,
	onContinuePressed,
	common,
}: CharacterProfileProps) {
	return (
		<div className={styles.character}>
			<header className={styles.header}>
				<h1 className={styles.name}>{character.name}</h1>
			</header>

			<div className={styles["profile-container"]}>
				<picture className={styles.picture}>
					<img
						src={characterImage[character.id].src}
						alt={character.name}
						height={characterImage[character.id].height}
						width={characterImage[character.id].width}
						className={styles.image}
					/>
					<figcaption className={styles.caption}>
						{profiles[character.id].alias}
					</figcaption>
				</picture>
			</div>

			<p className={styles.bio}>{profiles[character.id].bio}</p>

			<footer className={styles.footer}>
				<p className={styles.dixit}>{profiles[character.id].dixit}</p>

				<Button onClick={onContinuePressed} variant="outlined">
					{common.continue}
				</Button>
			</footer>
		</div>
	);
}