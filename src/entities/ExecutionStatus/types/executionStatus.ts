export type ExecutionStatus = {
	id: number;
	name: string;
	created_at: Date;
	updated_at: Date;
};

export type ExecutionStatusFillable = Pick<ExecutionStatus, "name">;
