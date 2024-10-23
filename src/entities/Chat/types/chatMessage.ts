import { Message } from "@/entities/Message/types/message";
import { Chat } from "./chat";

export type ChatMessage = {
    id: number;
    chat: Chat;
    message: Message;
    created_at: Date;
    updated_at: Date;
}