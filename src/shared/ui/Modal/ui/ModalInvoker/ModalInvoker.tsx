"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal, ModalProps } from "../Modal/Modal";
import { ModalActive } from "@/shared/types/modal";

export type ModalInvokerProps<T> = React.HTMLAttributes<HTMLDivElement> & {
	ModalContent: React.FC<
		T & {
			active: ModalActive;
		}
	>;
	modalProps?: Omit<ModalProps, "active">;
	modalContentProps?: T;
};

export const ModalInvoker = <T,>({
	ModalContent,
	modalProps,
	modalContentProps,
	children,
	...rest
}: ModalInvokerProps<T>) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<div onClick={() => setIsActive(true)} {...rest}>
			{children}

			{isActive && (
				<Modal active={{ isActive, setIsActive }} {...modalProps}>
					<ModalContent {...(modalContentProps as T)} active={{ isActive, setIsActive }} />
				</Modal>
			)}
		</div>
	);
};
