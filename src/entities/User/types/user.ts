import { Post } from "@/entities/Organization/types/post";
import { Role } from "./role";
import { Division } from "@/entities/Organization/types/division";

export type User = {
    id: number;
    login: string;
    password: string;
    avatar: string;
    first_name: string;
    second_name: string;
    patronymic: string;
    phone: string;
    email: string;
    is_subordinate: boolean;
    verified_at: Date;
    role: Role;
    post: Post;
    user: User;
    created_at: Date;
    updated_at: Date;
}

export type UserFillable = {
    login: string;
    password: string;
    avatar: string;
    first_name: string;
    second_name: string;
    patronymic: string;
    phone: string;
    email: string;
    is_subordinate: boolean;
    verified_at: Date;
    post: Post;
    user: User;
}