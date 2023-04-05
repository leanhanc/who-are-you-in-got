import { PropsWithChildren } from "react";
import NextLink from "next/link";
import classNames from "classnames";

// Styles
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
	variant: "shinny" | "outlined";
	href?: string;
	onClick?: () => any;
	animationDelay?: number;
	margin?: string;
}

export default function Button({
	children,
	variant,
	href,
	onClick,
	animationDelay = 0,
	margin,
}: ButtonProps) {
	const dynamicStyles = {
		animationDelay: `${animationDelay}s`,
		opacity: animationDelay > 0 ? 0 : 1,
		margin,
	};

	if (variant === "shinny") {
		if (!href) {
			throw Error("An href prop is needed!");
		}
		return (
			<NextLink
				className={classNames([styles.button, styles.shinny])}
				style={dynamicStyles}
				href={href}
			>
				{children}
			</NextLink>
		);
	}

	if (variant === "outlined") {
		return (
			<button
				className={classNames([styles.button, styles.outlined])}
				style={dynamicStyles}
				onClick={onClick}
			>
				{children}
			</button>
		);
	}

	return (
		<button
			className={classNames(["button"])}
			style={dynamicStyles}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
