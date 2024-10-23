import { User } from "@/entities/User/types/user";
import { Task } from "./task";

export type Taskperformer = {
    id: number;
    task: Task;
    user: User;
    created_at: Date;
    updated_at: Date;
}