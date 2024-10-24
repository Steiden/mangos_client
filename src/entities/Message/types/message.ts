import { User } from "@/entities/User/types/user";
import { MessageType } from "./messageType";
import { Chat } from "@/entities/Chat/types/chat";
import { Task } from "@/entities/Task/types/task";

export type Message = {
	id: number;
	text: string;
	is_read: boolean;
	message_type: MessageType;
	user_sending: User;
	user_receiving?: User;
	chat?: Chat;
	task?: Task;
	created_at: Date;
	updated_at: Date;
};

export type MessageForCreate = Pick<Message, "text"> & {
	user_sending_id: number;
	message_type_id: number;
	user_id?: number;
	user_receiving_id?: number;
	chat_id?: number;
	task_id?: number;
};
export type MessageFillabe = Pick<Message, "text" | "is_read">;
