import axios, { AxiosResponse } from "axios";
import { User, UserFillable } from "../types/user";
import { endpoints } from "@/shared/api";
import { MangosResponse } from "@/shared/api/types/mangosResponse";
import { Nullable } from "@/shared/types/nullable";

export const getUsers = async (): Promise<User[]> => {
	try {
		const response: AxiosResponse<MangosResponse<User[]>> = await axios.get(endpoints.users);

		if (!response.data?.success) {
			throw new Error(`${response.data?.message}: ${response.data?.error}`);
		}

		return response.data?.data;
	} catch (ex: unknown) {
		if (ex instanceof Error) {
			console.error(ex.message);
		} else {
			console.error("Неизвестная ошибка: " + ex);
		}
		return [];
	}
};

export const getUser = async (id: number): Promise<Nullable<User>> => {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await axios.get(
			`${endpoints.users}/${id}`
		);

		if (!response.data?.success) {
			throw new Error(`${response.data?.message}: ${response.data?.error}`);
		}

		return response.data?.data;
	} catch (ex: unknown) {
		if (ex instanceof Error) {
			console.error(ex.message);
		} else {
			console.error("Неизвестная ошибка: " + ex);
		}
		return null;
	}
};

export const updateUser = async (id: number, user: UserFillable): Promise<Nullable<User>> => {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await axios.put(
			`${endpoints.users}/${id}`,
			user
		);

		if (!response.data?.success) {
			throw new Error(`${response.data?.message}: ${response.data?.error}`);
		}

		return response.data?.data;
	} catch (ex: unknown) {
		if (ex instanceof Error) {
			console.error(ex.message);
		} else {
			console.error("Неизвестная ошибка: " + ex);
		}
		return null;
	}
};

export const deleteUser = async (id: number): Promise<boolean> => {
	try {
		const response: AxiosResponse<MangosResponse<null>> = await axios.delete(
			`${endpoints.users}/${id}`
		);

		if (!response.data?.success) {
			throw new Error(`${response.data?.message}: ${response.data?.error}`);
		}

		return response.data?.success;
	} catch (ex: unknown) {
		if (ex instanceof Error) {
			console.error(ex.message);
		} else {
			console.error("Неизвестная ошибка: " + ex);
		}
		return false;
	}
};