"use client";

import styles from "./HeaderProfile.module.scss";
import { ActionDropdownInvoker } from "@/shared/ui/ActionDropdown/ui/ActionDropdownInvoker/ActionDropdownInvoker";
import { DropdownAction } from "@/shared/ui/ActionDropdown/types/actionDropdown";
import { useRouter } from "next/navigation";
import { Nullable } from "@/shared/types/nullable";
import { User } from "@/entities/User/types/user";

type Props = {
	user: Nullable<User>;
}

export const HeaderProfile = ({ user }: Props) => {
	const router = useRouter();
	const actions: DropdownAction[] = [
		{
			id: 1,
			label: "Профиль",
			icon: "mangos-user_icon",
			// onClick: () => router.push("/pages/me"),
			onClick: () => {},
		},
		{
			id: 2,
			label: "Настройки",
			icon: "mangos-settings_icon",
			onClick: () => router.push("/pages/me/settings"),
			separator: true,
		},
		{
			id: 3,
			label: "Выйти",
			icon: "mangos-logout_icon",
			onClick: () => router.push("/auth/logout"),
		},
	];

	return (
		<ActionDropdownInvoker actions={actions}>
			<div className={`${styles["header-profile"]}`}>
				<div className={`${styles["header-profile__image-container"]}`}>
					{user?.avatar ? (
						<img src="" alt="" className={`${styles["header-profile__image"]}`} />
					) : (
						<span className={`${styles["header-profile__initial"]}`}>S</span>
					)}
				</div>
				<button className={`${styles["header-profile__button"]}`}>
					<span
						className={`mangos-arrow-bold_icon ${styles["header-profile__button-icon"]}`}
					></span>
				</button>
			</div>
		</ActionDropdownInvoker>
	);
};
