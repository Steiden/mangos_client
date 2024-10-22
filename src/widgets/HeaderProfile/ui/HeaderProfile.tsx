"use client";

import { useUser } from "@/shared/hooks/useUser";
import styles from "./HeaderProfile.module.scss";

export const HeaderProfile = () => {
	const { user, loading, error } = useUser();

	return (
		<div className={`${styles["header-profile"]}`}>
			<div className={`${styles["header-profile__image-container"]}`}>
				{user?.avatar ? (
					<img src="" alt="" className={`${styles["header-profile__image"]}`} />
				) : (
					<span className={`${styles["header-profile__initial"]}`}>S</span>
				)}
			</div>
			<button className={`${styles["header-profile__button"]}`}>
				<span className={`mangos-arrow-bold_icon ${styles["header-profile__button-icon"]}`}></span>
			</button>
		</div>
	);
};
