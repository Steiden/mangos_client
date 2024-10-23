"use client";

import styles from "./SearchInput.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	className?: string;
};

export const SearchInput = ({ className, ...rest }: Props) => {
	return (
		<div className={`${styles["search-input__wrapper"]} ${className}`}>
			<input type="text" {...rest} className={`${styles["search-input"]}`} />
			<button className={`${styles["search-input__button"]}`}>
				<span className={`mangos-search_icon ${styles["search-input__icon"]}`}></span>
			</button>
		</div>
	);
};
