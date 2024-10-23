import { Chat } from "@/entities/Chat/types/chat";
import { ExecutionStatus } from "@/entities/ExecutionStatus/types/executionStatus";
import { Organization } from "@/entities/Organization/types/organization";
import { User } from "@/entities/User/types/user";

export type Project = {
	id: number;
	name: string;
	description: string;
	avavtar: string;
	execution_status: ExecutionStatus;
	organization: Organization;
	chat: Chat;
	user: User;
	created_at: Date;
	updated_at: Date;
};

export type ProjectFillable = Pick<
	Project,
	"name" | "description" | "avavtar" | "execution_status" | "chat"
>;
