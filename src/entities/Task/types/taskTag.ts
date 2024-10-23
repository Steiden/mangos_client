import { Tag } from "./tag";
import { Task } from "./task";

export type TaskTag = {
    id: number;
    task: Task;
    tag: Tag;
    created_at: Date;
    updated_at: Date;
}