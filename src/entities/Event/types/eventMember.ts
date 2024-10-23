import { User } from "@/entities/User/types/user";
import { Event } from "./event";

export type EventMember = {
    id: number;
    event: Event;
    user: User;
    created_at: Date;
    updated_at: Date;
}