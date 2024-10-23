import { User } from "@/entities/User/types/user";

export type Notification = {
	id: number;
	title: string;
	text: string;
	is_read: boolean;
	user: User;
	created_at: Date;
	updated_at: Date;
};

export type NotificationFillable = Pick<Notification, "is_read">;
