"use client";

import { ModalInvoker, ModalInvokerProps } from "../../Modal/ui/ModalInvoker/ModalInvoker";
import styles from "./AddButton.module.scss";

type Props<T> = React.HTMLAttributes<HTMLButtonElement> &
	ModalInvokerProps<T> & {
		text: string;
	};

export const AddButton = <T,>({
	ModalContent,
	modalContentProps,
	modalProps,
	text,
	className,
	...rest
}: Props<T>) => {
	return (
		<ModalInvoker
			ModalContent={ModalContent}
			modalContentProps={modalContentProps}
			modalProps={modalProps}
            className={`${styles['add-button__wrapper']}`}
		>
			<button className={`${styles["add-button"]} ${className}`} {...rest}>
				<span className={`mangos-plus_icon ${styles["add-button__icon"]}`}></span>
				<span className={`${styles["add-button__text"]}`}>{text}</span>
			</button>
		</ModalInvoker>
	);
};
