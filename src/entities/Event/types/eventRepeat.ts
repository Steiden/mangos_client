export type EventRepeat = {
	id: number;
	name: string;
	created_at: Date;
	updated_at: Date;
};

export type EventRepeatFillable = Pick<EventRepeat, "name">;
