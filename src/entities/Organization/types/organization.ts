import { Chat } from "@entities/Chat/types/chat";
import { ActivityType } from "./activityType";

export type Organization = {
    id: number;
    full_name: string;
    name: string;
    address: string;
    phone: string;
    activity_type: ActivityType;
    chat: Chat
    created_at: Date;
    updated_at: Date;
}