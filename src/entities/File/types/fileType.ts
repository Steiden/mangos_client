export type FileType = {
	id: number;
	name: string;
	created_at: Date;
	updated_at: Date;
};

export type FileTypeFillable = Pick<FileType, "name">;
