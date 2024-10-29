"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { Nullable } from "@/shared/types/nullable";

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
	active: {
		isActive: boolean;
		setIsActive: Dispatch<SetStateAction<boolean>>;
	};
};

export const Modal = ({ className, children, active, ...rest }: ModalProps) => {
	const [modalRoot, setModalRoot] = useState<Nullable<HTMLElement>>(null);

	useEffect(() => {
		setModalRoot(document.getElementById("modal-root"));
	}, []);

	return (
		<>
			{modalRoot &&
				createPortal(
					<div className={`${styles["modal__overlay"]} ${className}`} {...rest}>
						<div
							className={`${styles["modal"]} ${
								active.isActive ? styles["modal--active"] : ""
							}`}
						>
							{children}

							<button
								className={`${styles["modal__close"]}`}
								type="button"
								onClick={(e: React.MouseEvent) => {
									e.stopPropagation();
									active.setIsActive(false);
								}}
							>
								<span
									className={`mangos-close_icon ${styles["modal__close-icon"]}`}
								></span>
							</button>
						</div>
					</div>,
					modalRoot
				)}
		</>
	);
};
