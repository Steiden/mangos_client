"use client";

import styles from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	style?: "primary" | "secondary";
};

export const Button = ({ className, style = "primary", children, ...rest }: Props) => {
	return (
		<button
			className={`${styles["button"]} ${styles["button--" + style]} ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};
