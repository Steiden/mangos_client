"use client";

import { NavItem } from "@/shared/ui/NavItem/ui/NavItem";
import styles from "./Header.module.scss";

export const Header = () => {
	const navItems = [
		{
			label: "Проекты",
			icon: "folder_icon",
		},
		{
			label: "Автоматизация",
			icon: "robot_icon",
		},
		{
			label: "События",
			icon: "event_icon",
		},
		{
			label: "Задачи",
			icon: "task_icon",
		},
	];

	return (
		<div className={`${styles["header__wrapper"]}`}>
			<header className={`${styles["header"]}`}>
				<img
					src="/images/icons/logo.svg"
					alt="logo"
					className={`${styles["header__logo"]}`}
				/>
				{/* Search input component */}
				<div className={`${styles["header__right"]}`}>
					<ul className={`${styles["header__list"]}`}>
						{navItems.map((navItem) => (
							<NavItem label={navItem.label} icon={navItem.icon} />
						))}
					</ul>
				</div>
			</header>
		</div>
	);
};
