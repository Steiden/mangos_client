import { User } from "@/entities/User/types/user";
import { Organization } from "./organization";

export type OrganizationEmployee = {
    id: number;
    organization: Organization;
    user: User;
    created_at: Date;
    updated_at: Date;
}