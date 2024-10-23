import { File } from "@/entities/File/types/file";
import { Message } from "./message";

export type MessageAttachment = {
    id: number;
    message: Message;
    file: File;
    created_at: Date;
    updated_at: Date;
}