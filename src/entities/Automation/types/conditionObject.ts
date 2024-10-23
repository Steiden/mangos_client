import { Event } from "@/entities/Event/types/event";
import { Task } from "@/entities/Task/types/task";

export type ConditionObject = {
	id: number;
	task: Task;
	event: Event;
	created_at: Date;
	updated_at: Date;
};

export type ConditionObjectFillable = Pick<ConditionObject, "task" | "event">;
