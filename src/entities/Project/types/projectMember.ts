import { User } from "@/entities/User/types/user";
import { Project } from "./project";

export type ProjectMember = {
    id: number;
    project: Project;
    user: User;
    created_at: Date;
    updated_at: Date;
}