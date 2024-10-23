import { ComparisonType } from "./comparisonType";
import { ConditionObject } from "./conditionObject";
import { ConditionValueObject } from "./conditionValueObject";

export type AutomationCondition = {
	id: number;
	condition_object: ConditionObject;
	comparison_type: ComparisonType;
	condition_value_object: ConditionValueObject;
	created_at: Date;
	updated_at: Date;
};

export type AutomationConditionFillable = Pick<
	AutomationCondition,
	"condition_object" | "comparison_type" | "condition_value_object"
>;
