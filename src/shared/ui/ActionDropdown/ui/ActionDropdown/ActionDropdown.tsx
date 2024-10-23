"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./ActionDropdown.module.scss";
import { DropdownAction } from "../../types/actionDropdown";

export type ActionDropdownProps = {
	actions: DropdownAction[];
	active?: {
		isActive: boolean;
		setIsActive: Dispatch<SetStateAction<boolean>>;
	};
};

export const ActionDropdown = ({ actions, ...rest }: ActionDropdownProps) => {
	useEffect(() => {
		window.addEventListener("click", (e) => {
			rest.active?.setIsActive(false);
		});
	}, []);

	return (
		<ul
			className={`${styles["action-dropdown"]} ${
				rest.active?.isActive ? styles["action-dropdown--active"] : ""
			}`}
		>
			{actions.map((action) => {
				return (
					<li
						className={`${styles["action-dropdown__item"]} ${
							action.separator ? styles["action-dropdopwn__item--separator"] : ""
						}`}
						key={action.id}
					>
						<button
							className={`${styles["action-dropdown__button"]} ${
								action.className || ""
							}`}
							disabled={action.disabled}
							onClick={action.onClick}
						>
							{action.icon && (
								<span
									className={`${styles["action-dropdown__icon"]} ${action.icon}`}
								></span>
							)}
							{action.label}
						</button>
					</li>
				);
			})}
		</ul>
	);
};
