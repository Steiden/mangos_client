import { Post } from "@/entities/Organization/types/post";
import { Role } from "./role";
import { Chat } from "@/entities/Chat/types/chat";

export type User = {
	id: number;
	login: string;
	password: string;
	avatar?: string;
	first_name: string;
	second_name: string;
	patronymic: string;
	phone?: string;
	email: string;
	is_subordinate?: boolean;
	verified_at?: Date;
	post?: Post;
	user?: User;
	role: Role;
    chats: Chat[];
	created_at: Date;
	updated_at: Date;
};

export type UserFillable = Pick<
	User,
	| "login"
	| "password"
	| "avatar"
	| "first_name"
	| "second_name"
	| "patronymic"
	| "phone"
	| "email"
	| "is_subordinate"
	| "verified_at"
	| "post"
	| "user"
>;
