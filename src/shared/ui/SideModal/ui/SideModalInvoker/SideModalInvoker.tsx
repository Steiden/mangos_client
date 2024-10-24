"use client";

import { useState } from "react";
import { SideModal, SideModalProps } from "../SideModal/SideModal";
import styles from "./SideModalInvoker.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	ModalContent: React.ComponentType;
	modalProps?: Omit<SideModalProps, "active">;
};

export const SideModalInvoker = ({ ModalContent, modalProps, children, ...rest }: Props) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<div onClick={() => setIsActive(true)} {...rest}>
			{children}

			<SideModal active={{ isActive, setIsActive }} {...modalProps}>
				<ModalContent {...modalProps} />
			</SideModal>
		</div>
	);
};
