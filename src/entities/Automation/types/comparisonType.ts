export type ComparisonType = {
    id: number;
    name: string;
}

export type ComparisonTypeFillable = Pick<ComparisonType, "name">;