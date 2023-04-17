// Assets
import HouseBaratheon from "@/public/images/sigils/house-baratheon.webp";
import HouseLannister from "@/public/images/sigils/house-lannister.webp";
import HouseStark from "@/public/images/sigils/house-stark.webp";
import HouseTargaryen from "@/public/images/sigils/house-targaryen.webp";
import HouseBaratheonSmall from "@/public/images/sigils/house-baratheon-small.webp";
import HouseLannisterSmall from "@/public/images/sigils/house-lannister-small.webp";
import HouseStarkSmall from "@/public/images/sigils/house-stark-small.webp";
import HouseTargaryenSmall from "@/public/images/sigils/house-targaryen-small.webp";

// Styles
import styles from "./Sigils.module.css";

export default function Sigils() {
	return (
		<article className={styles.sigils} aria-hidden>
			<picture>
				<source
					srcSet={HouseBaratheon.src}
					width={96}
					height={96}
					media="(min-width: 1000px)"
					className={styles.baratheon}
				/>
				<img
					src={HouseBaratheonSmall.src}
					width={48}
					height={48}
					alt="House Baratheon"
					className={styles.baratheon}
				/>
			</picture>

			<picture>
				<source
					srcSet={HouseTargaryen.src}
					width={96}
					height={96}
					media="(min-width: 1000px)"
					className={styles.targaryen}
				/>
				<img
					src={HouseTargaryenSmall.src}
					width={48}
					height={48}
					alt="House Targaryen"
					className={styles.targaryen}
				/>
			</picture>

			<picture>
				<source
					srcSet={HouseStark.src}
					width={96}
					height={96}
					media="(min-width: 1000px)"
					className={styles.stark}
				/>
				<img
					src={HouseStarkSmall.src}
					width={48}
					height={48}
					alt="House Stark"
					className={styles.stark}
				/>
			</picture>

			<picture>
				<source
					srcSet={HouseLannister.src}
					width={96}
					height={96}
					media="(min-width: 1000px)"
					className={styles.lannister}
				/>
				<img
					src={HouseLannisterSmall.src}
					width={48}
					height={48}
					alt="House Lannister"
					className={styles.lannister}
				/>
			</picture>
		</article>
	);
}
