import { ExecutionStatus } from "@/entities/ExecutionStatus/types/executionStatus";
import { Category } from "@/entities/Task/types/category";
import { Tag } from "@/entities/Task/types/tag";
import { TaskPriority } from "@/entities/Task/types/taskPriority";

export type ConditionValueObject = {
	id: number;
	attribute_name?: string;
	value?: string;
	tag?: Tag;
	category?: Category;
	execution_status?: ExecutionStatus;
	task_priority?: TaskPriority;
	created_at: Date;
	updated_at: Date;
};

export type ConditionValueObjectFillable = Pick<
	ConditionValueObject,
	"attribute_name" | "value" | "tag" | "category" | "execution_status" | "task_priority"
>;
