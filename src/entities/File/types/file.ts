import { FileType } from "./fileType";

export type File = {
	id: number;
	name: string;
	path: string;
	size: number;
	file_type: FileType;
	created_at: Date;
	updated_at: Date;
};
