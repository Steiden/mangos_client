"use client";

import { Chat } from "@/entities/Chat/types/chat";
import styles from "./ChatItem.module.scss";

type Props = Chat;

export const ChatItem = (props: Props) => {
	return (
		<article className={`${styles["chat"]}`}>
			<img src={props.avatar} alt="chat avatar" className={`${styles["chat__avatar"]}`} />
			<div className={`${styles["chat__content"]}`}>
				<h5 className={`${styles["chat__title"]}`}>{props.name}</h5>
				<span className={`${styles["chat__span"]}`}>
					{props?.messages?.[props?.messages.length - 1]?.text}
				</span>
			</div>
		</article>
	);
};
