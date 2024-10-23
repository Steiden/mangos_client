import axios, { AxiosResponse } from "axios";
import { User, UserFillable } from "../types/user";
import { endpoints } from "@/shared/api";
import { MangosResponse } from "@/shared/api/types/mangosResponse";
import { Nullable } from "@/shared/types/nullable";
import { handleResponse } from "@/shared/helpers/handleResponse";
import { handleException } from "@/shared/helpers/handleException";

export const getUsers = async (): Promise<MangosResponse<User[]>> => {
	try {
		const response: AxiosResponse<MangosResponse<User[]>> = await axios.get(endpoints.users);
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};

export const getUser = async (id: number): Promise<MangosResponse<Nullable<User>>> => {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await axios.get(
			`${endpoints.users}/${id}`
		);
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};

export const createUser = async (user: UserFillable): Promise<MangosResponse<Nullable<User>>> => {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await axios.post(
			endpoints.users,
			user
		);
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};

export const updateUser = async (id: number, user: UserFillable): Promise<MangosResponse<Nullable<User>>> => {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await axios.put(
			`${endpoints.users}/${id}`,
			user
		);
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};

export const deleteUser = async (id: number): Promise<Omit<MangosResponse<any>, "data">> => {
	try {
		const response: AxiosResponse<MangosResponse<any>> = await axios.delete(
			`${endpoints.users}/${id}`
		);
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};
