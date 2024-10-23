import { Message } from "@/entities/Message/types/message";
import { Task } from "./task";

export type TaskComment = {
    id: number;
    task: Task;
    message: Message;
    created_at: Date;
    updated_at: Date;
}