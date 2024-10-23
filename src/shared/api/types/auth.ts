import { User } from "@/entities/User/types/user";
import { MangosResponse } from "./mangosResponse";

export type LoginData = {
    login: string;
    password: string;
}
export type RegistrationData = {
    fio: string;
    email: string;
    login: string;
    password: string;
}

export type LoginResponse = MangosResponse<{ token: string}>;
export type RefreshResponse = LoginResponse;
export type LogoutResponse = MangosResponse<null>;
export type MeResponse = MangosResponse<User>;