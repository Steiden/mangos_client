export type MessageType = {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
}

export type MessageTypeFillable = Pick<MessageType, "name">;