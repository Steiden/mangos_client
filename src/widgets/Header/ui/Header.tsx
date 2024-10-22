"use client";

import { NavItem } from "@/shared/ui/NavItem/ui/NavItem";
import styles from "./Header.module.scss";
import Link from "next/link";
import { HeaderProfile } from "@/widgets/HeaderProfile/ui/HeaderProfile";

export const Header = () => {
	const navItems = [
		{
			label: "Проекты",
			icon: "mangos-folder_icon",
		},
		{
			label: "Автоматизация",
			icon: "mangos-robot_icon",
		},
		{
			label: "События",
			icon: "mangos-calendar_icon",
		},
		{
			label: "Задачи",
			icon: "mangos-task_icon",
		},
	];

	return (
		<div className={`${styles["header__wrapper"]}`}>
			<header className={`${styles["header"]}`}>
				<Link href="/" className={`${styles["header__logo"]}`}>
					<img
						src="/images/icons/logo.svg"
						alt="logo"
						className={`${styles["header__logo-image"]}`}
					/>
				</Link>
				{/* Search input component */}
				<div className={`${styles["header__right"]}`}>
					<ul className={`${styles["header__list"]}`}>
						{navItems.map((navItem) => (
							<NavItem label={navItem.label} icon={navItem.icon} />
						))}
					</ul>
					<HeaderProfile />
				</div>
			</header>
		</div>
	);
};
