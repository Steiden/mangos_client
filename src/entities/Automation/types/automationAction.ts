export type AutomationAction = {
    id: number;
    name: string;
}

export type AutomationActionFillable = Pick<AutomationAction, "name">;