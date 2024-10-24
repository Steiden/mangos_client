"use client";

import { SearchInput } from "@/shared/ui/SearchInput/ui/SearchInput";
import styles from "./Messages.module.scss";
import { useEffect, useState } from "react";
import { Chat } from "@/entities/Chat/types/chat";
import { ChatItem } from "./ChatItem/ChatItem";
import { MessageItem } from "./MessageItem/MessageItem";
import { useUser } from "@/shared/hooks/useUser";
import { MessageForCreate } from "@/entities/Message/types/message";
import { createMessage } from "@/entities/Message/api/message";
import { MessageTypeEnum } from "@/entities/Message/types/messageType";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";

export const Messages = () => {
	const { user, loading, error, updateUser } = useUser();
	const [token] = useLocalStorage<string>("token");
	const [chats, setChats] = useState<Chat[]>([]);
	const [chatSelected, setChatSelected] = useState<Chat>();
	const [messageText, setMessageText] = useState<string>("");

	useEffect(() => {
		console.log(user?.chats);
		setChats(user?.chats as Chat[]);
	}, [user]);

	const sendMessage = async (e: React.FormEvent) => {
		e.preventDefault();

		const message: MessageForCreate = {
			text: messageText,
			message_type_id: MessageTypeEnum.CHAT,
			user_sending_id: user?.id!,
			chat_id: chatSelected?.id,
		};

		const newMessage = await createMessage(message, token);
		if (!newMessage?.success) {
			console.log("New message failed", newMessage?.error);
			return;
		}
		console.log("New message", newMessage.data);
		// updateUser();
	};

	return (
		<section className={`${styles["messages"]}`}>
			<div className={`${styles["messages__side"]}`}>
				<div className={`${styles["messages__actions"]}`}>
					<button className={`${styles["messages__add"]}`} type="button">
						<span className={`mangos-plus_icon ${styles["messages__add-icon"]}`}></span>
					</button>
					<SearchInput
						className={`${styles["messages__search"]}`}
						placeholder="Поиск переписки"
					/>
				</div>
				<ul className={`${styles["messages__list"]}`}>
					{chats?.map((chat) => (
						<li
							className={`${styles["messages__item"]}`}
							key={chat.id}
							onClick={() => setChatSelected(chat)}
						>
							<ChatItem {...chat} />
						</li>
					))}
				</ul>
			</div>

			<div className={`${styles["messages__current"]} ${styles["messages-current"]}`}>
				<header className={`${styles["messages-current__header"]}`}>
					<div className={`${styles["messages-current__header-content"]}`}>
						{chatSelected?.avatar && (
							<img
								src={chatSelected?.avatar}
								alt="chat avatar"
								className={`${styles["message-current__avatar"]}`}
							/>
						)}
						<h4 className={`${styles["messages-current__title"]}`}>
							{chatSelected?.name}
						</h4>
					</div>
					<div className={`${styles["messages-current__actions"]}`}>
						<button
							className={`${styles["messages-current__action-button"]}`}
							type="button"
						>
							<span
								className={`mangos-search_icon ${styles["messages-current__action-button-icon"]}`}
							></span>
						</button>
						<button
							className={`${styles["messages-current__action-button"]}`}
							type="button"
						>
							<span
								className={`mangos-ellipsys_icon ${styles["messages-current__action-button-icon"]}`}
							></span>
						</button>
					</div>
				</header>
				<div className={`${styles["messages-current__content"]}`}>
					<ul className={`${styles["messages-current__list"]}`}>
						{chatSelected?.messages?.map((message) => (
							<li
								className={`${styles["message-current__item"]} ${
									message.user_receiving?.id == user?.id
										? styles["message-current__item--me"]
										: ""
								}`}
								key={message.id}
							>
								<MessageItem {...message} />
							</li>
						))}
					</ul>
				</div>
				<form className={`${styles["messages-current__form"]}`} onSubmit={sendMessage}>
					<input type="file" className={`visually-hidden`} />
					<button className={`${styles["messages-current__form-button"]}`} type="button">
						<span
							className={`mangos-upload_icon ${styles["messages-current__form-button-icon"]}`}
						></span>
					</button>
					<input
						type="text"
						placeholder="Введите сообщение:"
						className={`${styles["messages-current__form-input"]}`}
						onChange={(e) => setMessageText(e.target.value)}
					/>
					<button className={`${styles["messages-current__form-button"]}`} type="submit">
						<span
							className={`mangos-send_icon ${styles["messages-current__form-button-icon"]}`}
						></span>
					</button>
				</form>
			</div>
		</section>
	);
};
