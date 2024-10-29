import { ExecutionStatus } from "@/entities/ExecutionStatus/types/executionStatus";
import { TaskPriority } from "./taskPriority";
import { Category } from "./category";
import { User } from "@/entities/User/types/user";
import { Project } from "@/entities/Project/types/project";
import { MangosResponse } from "@/shared/api/types/mangosResponse";
import { Tag } from "./tag";

export type Task = {
	id: number;
	name: string;
	description: string;
	started_at: Date;
	finished_at: Date;
	execution_status: ExecutionStatus;
	task_priority: TaskPriority;
	category: Category;
	tags: Tag[];
	user: User;
	project: Project;
	created_at: Date;
	updated_at: Date;
};

export type TaskFillable = Pick<
	Task,
	| "name"
	| "description"
	| "started_at"
	| "finished_at"
	| "execution_status"
	| "task_priority"
	| "category"
	| "tags"
	| "project"
>;

export type TasksResponse = MangosResponse<Task[]>;
export type TaskResponse = MangosResponse<Task>;
export type TaskDeleteResponse = Omit<MangosResponse<any>, "data">;