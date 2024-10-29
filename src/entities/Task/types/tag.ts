import { MangosResponse } from "@/shared/api/types/mangosResponse";

export type Tag = {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
}

export type TagFillable = Pick<Tag, "name">;

export type TagsResponse = MangosResponse<Tag[]>;