"use client";

import { NavItem } from "@/shared/ui/NavItem/ui/NavItem";
import styles from "./Header.module.scss";
import Link from "next/link";
import { HeaderProfile } from "@/shared/components/HeaderProfile/ui/HeaderProfile";
import { SearchInput } from "@/shared/ui/SearchInput/ui/SearchInput";
import { useUser } from "@/shared/hooks/useUser";
import { Button } from "@/shared/ui/Button/ui/Button";
import { ModalInvoker } from "@/shared/ui/Modal/ui/ModalInvoker/ModalInvoker";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";
import { SideModalInvoker } from "@/shared/ui/SideModal/ui/SideModalInvoker/SideModalInvoker";
import { Messages } from "@/widgets/Messages/ui/Messages";

export const Header = () => {
	const { user, loading, error } = useUser();
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
				<SearchInput placeholder="Найдите, что нужно" />
				<div className={`${styles["header__right"]}`}>
					<ul className={`${styles["header__list"]}`}>
						{navItems.map((navItem) => (
							<NavItem
								label={navItem.label}
								icon={navItem.icon}
								key={navItem.label}
							/>
						))}
					</ul>
					{user ? (
						<HeaderProfile user={user} />
					) : (
						<div className={`${styles["header__auth-buttons"]}`}>
							<ModalInvoker ModalContent={Login}>
								<Button className={`${styles["header__auth-button"]}`}>Вход</Button>
							</ModalInvoker>
							<ModalInvoker ModalContent={Registration}>
								<Button
									className={`${styles["header__auth-button"]}`}
									style="secondary"
								>
									Регистрация
								</Button>
							</ModalInvoker>
						</div>
					)}
				</div>
			</header>
			<aside className={`${styles["header__side"]}`}>
				<button className={`${styles["header__side-button"]}`}>
					<span className={`mangos-bell_icon ${styles['header__side-button-icon']}`}></span>
				</button>
				<SideModalInvoker ModalContent={Messages} modalProps={{ title: "Сообщения" }}>
					<button className={`${styles["header__side-button"]}`}>
						<span className={`mangos-message_icon ${styles['header__side-button-icon']}`}></span>
					</button>
				</SideModalInvoker>
			</aside>
		</div>
	);
};
