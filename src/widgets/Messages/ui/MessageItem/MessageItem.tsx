"use client";

import { Message } from "@/entities/Message/types/message";
import styles from "./MessageItem.module.scss";

type Props = Message;

export const MessageItem = (props: Props) => {
	return (
		<article className={`${styles["message"]}`}>
			<img
				src={props.user_sending.avatar}
				alt="user avatar"
				className={`${styles["message__avatar"]}`}
			/>
			<div className={`${styles["message__content"]}`}>
				<p className={`${styles["message__text"]}`}>{props.text}</p>
				<div className={`${styles["message__info"]}`}>
					<span className={`${styles["message__span"]}`}>
						{props.updated_at.toLocaleDateString()}
					</span>
					<span
						className={`mangos-accept_icon ${styles["message__span"]} ${styles["message__span--read"]}`}
					></span>
				</div>
			</div>
		</article>
	);
};
