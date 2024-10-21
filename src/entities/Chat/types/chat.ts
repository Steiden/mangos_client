import { User } from "@entities/User/types/user";

export type Chat = {
    id: number;
    name: string;
    avatar: string;
    user: User;
    created_at: Date;
    updated_at: Date;
}