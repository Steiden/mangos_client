import { User } from "@/entities/User/types/user";
import { EventRepeat } from "./eventRepeat";

export type Event = {
	id: number;
	name: string;
	description: string;
	started_at: Date;
	finished_at: Date;
	is_important: boolean;
	user: User;
	event_repeat: EventRepeat;
	created_at: Date;
	updated_at: Date;
};

export type EventFillable = Pick<
	Event,
	"name" | "description" | "started_at" | "finished_at" | "is_important" | "event_repeat"
>;
