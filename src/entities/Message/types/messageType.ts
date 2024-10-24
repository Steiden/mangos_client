export type MessageType = {
    id: number;
    name: "user" | "task" | "chat";
    created_at: Date;
    updated_at: Date;
}

export type MessageTypeFillable = Pick<MessageType, "name">;

export enum MessageTypeEnum {
    USER = 1,
    TASK = 2,
    CHAT = 2,
}