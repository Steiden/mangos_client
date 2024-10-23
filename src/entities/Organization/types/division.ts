import { Organization } from "./organization";

export type Division = {
	id: number;
	name: string;
	organization: Organization;
	created_at: Date;
	updated_at: Date;
};

export type DivisionFillable = Pick<Division, "name">;
