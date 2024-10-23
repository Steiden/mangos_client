import { Automation } from "@/entities/Automation/types/automation";
import { User } from "@/entities/User/types/user";

export type AutomationEditor = {
    id: number;
    automation: Automation;
    user: User;
    created_at: Date;
    updated_at: Date;
}