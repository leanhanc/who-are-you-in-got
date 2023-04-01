import classNames from "classnames";
import NextImage from "next/image";

// Assets
import Ornament from "@/public/images/ornament.svg";

// Styles
import styles from "./Ornaments.module.css";

export default function Ornaments() {
	return (
		<div aria-hidden className={styles.ornaments}>
			<NextImage
				src={Ornament}
				alt=""
				priority
				width={24}
				className={classNames([styles.ornament, styles["top-left"]])}
			/>

			<NextImage
				src={Ornament}
				alt=""
				priority
				width={24}
				className={classNames([styles.ornament, styles["top-right"]])}
			/>

			<NextImage
				src={Ornament}
				alt=""
				priority
				width={24}
				className={classNames([styles.ornament, styles["bottom-left"]])}
			/>

			<NextImage
				src={Ornament}
				alt=""
				priority
				width={24}
				className={classNames([styles.ornament, styles["bottom-right"]])}
			/>
		</div>
	);
}
