// Assets
import HouseBaratheon from "@/public/images/sigils/house-baratheon.webp";
import HouseLannister from "@/public/images/sigils/house-lannister.webp";
import HouseStark from "@/public/images/sigils/house-stark.webp";
import HouseTargaryen from "@/public/images/sigils/house-targaryen.webp";

// Styles
import styles from "./Sigils.module.css";

export default function Sigils() {
	return (
		<article className={styles.sigils} aria-hidden>
			<img
				src={HouseBaratheon.src}
				width={HouseBaratheon.width}
				height={HouseBaratheon.height}
				alt="House Baratheon"
				className={styles.baratheon}
			/>
			<img
				src={HouseTargaryen.src}
				width={HouseTargaryen.width}
				height={HouseTargaryen.height}
				alt="House Targaryen"
				className={styles.targaryen}
			/>
			<img
				src={HouseStark.src}
				width={HouseStark.width}
				height={HouseStark.height}
				alt="House Stark"
				className={styles.stark}
			/>
			<img
				src={HouseLannister.src}
				width={HouseLannister.width}
				height={HouseLannister.height}
				alt="House Lannister"
				className={styles.lannister}
			/>
		</article>
	);
}
