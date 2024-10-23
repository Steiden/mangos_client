import { User } from "@/entities/User/types/user";
import { AutomationAction } from "./automationAction";
import { AutomationCondition } from "./automationCondition";
import { Project } from "next/dist/build/swc";

export type Automation = {
	id: number;
	name: string;
	automation_action: AutomationAction;
	automation_condition: AutomationCondition;
	user: User;
	project: Project;
	created_at: Date;
	updated_at: Date;
};

export type AutomationFillable = Omit<Automation, "id" | "user" | "created_at" | "updated_at">;