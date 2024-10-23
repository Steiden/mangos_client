import { User } from "@/entities/User/types/user";
import { Chat } from "./chat";

export type ChatMember = {
    id: number;
    chat: Chat;
    user: User;
    created_at: Date;
    updated_at: Date;
}