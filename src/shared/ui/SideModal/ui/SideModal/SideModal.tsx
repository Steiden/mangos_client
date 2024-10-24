"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./SideModal.module.scss";
import { createPortal } from "react-dom";

export type SideModalProps = React.HTMLAttributes<HTMLDivElement> & {
	title?: string;
	active: {
		isActive: boolean;
		setIsActive: Dispatch<SetStateAction<boolean>>;
	};
};

export const SideModal = ({ title, active, className, children, ...rest }: SideModalProps) => {

	return (
		<>
			{createPortal(
				<div
					className={`${styles["side-modal"]} ${
						active.isActive ? styles["side-modal--active"] : ""
					}`}
					{...rest}
				>
					<header className={`${styles["side-modal__header"]}`}>
						<h3 className={`${styles["side-modal__title"]}`}>{title}</h3>

						<button className={`${styles["side-modal__close"]}`} type="button" onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            active.setIsActive(false);
                        }}>
							<span
								className={`mangos-close_icon ${styles["side-modal__close-icon"]}`}
							></span>
						</button>
					</header>
					<div className={`${styles["side-modal__content"]}`}>{children}</div>
				</div>,
				document.body
			)}
		</>
	);
};
