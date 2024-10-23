import { File } from "@/entities/File/types/file";
import { Task } from "./task";

export type TaskAttachment = {
    id: number;
    task: Task;
    file: File;
    created_at: Date;
    updated_at: Date;
}