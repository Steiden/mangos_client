export type ActivityType = {
	id: number;
	name: string;
	created_at: Date;
    updated_at: Date;
};

export type ActivityTypeFillable = Pick<ActivityType, "name">;
