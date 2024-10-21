"use client";

import { useState } from "react";
import styles from "./Input.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	errorMessage?: string;
};
export const Input = ({ type = "text", ...props }: Props) => {
    const {
        className,
        placeholder,
        onFocus: paretnOnFocus,
        onBlur: paretnOnBlur,
        ...restProps
    } = props;

	const [isActive, setIsActive] = useState<boolean>(false);

    const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsActive(true);
        paretnOnFocus?.(event);
    };

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsActive(!!event.target.value);
        paretnOnBlur?.(event);
    };

	return (
		<div className={`${styles["input__container"]} ${className}`}>
			<input
				className={`${styles["input"]} ${isActive && styles["input--active"]}`}
				type={type}
				{...restProps}
                onFocus={onFocus}
                onBlur={onBlur}
			/>
			<label className={`${styles["input__label"]}`} htmlFor={restProps.id}>
				{placeholder}
			</label>
			{restProps.errorMessage && (
				<div className={styles["input__error"]}>{restProps.errorMessage}</div>
			)}
		</div>
	);
};
