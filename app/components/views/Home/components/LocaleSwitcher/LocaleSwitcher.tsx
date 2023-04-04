"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Config
import { i18n } from "@/i18n/i18n-config";

// Styles
import styles from "./LocaleSwitcher.module.css";

// Types
import { Locale } from "@/@types/i18n";
import classNames from "classnames";

interface LocaleSwitcherProps {
	currentLocale: Locale;
}

export default function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
	const pathName = usePathname();

	const redirectedPathName = (locale: string) => {
		if (!pathName) return "/";
		const segments = pathName.split("/");
		segments[1] = locale;
		return segments.join("/");
	};

	return (
		<menu className={styles.menu}>
			<ul>
				{i18n.locales.map((locale: Locale, index) => {
					return (
						<li key={locale}>
							<Link
								href={redirectedPathName(locale)}
								className={classNames({
									[styles.active]: locale === currentLocale,
								})}
							>
								{locale === "en" ? "ENGLISH" : "ESPAÑOL"}
							</Link>
							{index === 0 && <span className={styles.separator}>-</span>}
						</li>
					);
				})}
			</ul>
		</menu>
	);
}
