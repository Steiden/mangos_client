import { Project } from "@/entities/Project/types/project";

export type Category = {
	id: number;
	name: string;
	project: Project;
	created_at: Date;
    updated_at: Date;
};

export type CategoryFillable = Pick<Category, "name" | "project">;
