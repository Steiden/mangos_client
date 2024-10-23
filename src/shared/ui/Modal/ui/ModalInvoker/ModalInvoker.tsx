"use client";

import React, { useState } from "react";
import { Modal, ModalProps } from "../Modal/Modal";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	ModalContent: React.ComponentType;
	modalProps?: Omit<ModalProps, "active">;
};

export const ModalInvoker = ({ ModalContent, modalProps, children, ...rest }: Props) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<div onClick={() => setIsActive(true)} {...rest}>
			{children}

			{isActive && (
				<Modal active={{ isActive, setIsActive }} {...modalProps}>
					<ModalContent />
				</Modal>
			)}
		</div>
	);
};
