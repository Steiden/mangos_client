import { Message } from "@/entities/Message/types/message";
import { User } from "@entities/User/types/user";

export type Chat = {
	id: number;
	name: string;
	avatar: string;
	user: User;
	messages: Message[];
	members: User[];
	moderators: User[];
	created_at: Date;
	updated_at: Date;
};

export type ChatShort = Omit<Chat, "messages" | "members" | "moderators">;
export type ChatFillable = Pick<Chat, "name" | "avatar">;
