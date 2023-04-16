"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

// Types
import { PropsWithChildren } from "react";
import { Locale } from "@/@types/i18n";

// Styles
import styles from "./Button.module.css";

// Utils
import getLocaleFromPath from "@/i18n/get-locale";

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
	// Locale
	const pathName = usePathname();
	const currentLocale: Locale = getLocaleFromPath(pathName);

	// Styles
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
				href={`${currentLocale}${href}`}
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
