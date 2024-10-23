export type Tag = {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
}

export type TagFillable = Pick<Tag, "name">;