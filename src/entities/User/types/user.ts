import { Post } from "@/entities/Organization/types/post";
import { Role } from "./role";

export type UserFillable = {
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
}

export type User = UserFillable & {
    id: number;
    role: Role;
    created_at: Date;
    updated_at: Date;
}
