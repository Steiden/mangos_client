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
}