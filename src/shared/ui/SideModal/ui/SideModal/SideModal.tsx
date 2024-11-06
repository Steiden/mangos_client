"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./SideModal.module.scss";
import { createPortal } from "react-dom";
import { Nullable } from "@/shared/types/nullable";

export type SideModalProps = React.HTMLAttributes<HTMLDivElement> & {
	title?: string;
	active: {
		isActive: boolean;
		setIsActive: Dispatch<SetStateAction<boolean>>;
	};
};

export const SideModal = ({ title, active, className, children, ...rest }: SideModalProps) => {
	const [modalRoot, setModalRoot] = useState<Nullable<HTMLElement>>(null);

	useEffect(() => {
		setModalRoot(document.getElementById("modal-root"));
	}, []);

	useEffect(() => {
		if (active.isActive) document.body.style.maxHeight = "100dvh";
		else document.body.style.maxHeight = "";
	}, [active.isActive]);

	return (
		<>
			{modalRoot &&
				createPortal(
					<div
						className={`${styles["side-modal"]} ${
							active.isActive ? styles["side-modal--active"] : ""
						}`}
						{...rest}
					>
						<header className={`${styles["side-modal__header"]}`}>
							<h3 className={`${styles["side-modal__title"]}`}>{title}</h3>

							<button
								className={`${styles["side-modal__close"]}`}
								type="button"
								onClick={(e: React.MouseEvent) => {
									e.stopPropagation();
									active.setIsActive(false);
								}}
							>
								<span
									className={`mangos-close_icon ${styles["side-modal__close-icon"]}`}
								></span>
							</button>
						</header>
						<div className={`${styles["side-modal__content"]}`}>{children}</div>
					</div>,
					modalRoot
				)}
		</>
	);
};
