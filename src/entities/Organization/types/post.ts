import { Division } from "./division";

export type Post = {
    id: number;
    name: string;
    division: Division;
    created_at: Date;
    updated_at: Date;
}