import axios, { AxiosResponse } from "axios";
import { LoginData, LoginResponse, LogoutResponse, RefreshResponse } from "./types/auth";
import { endpoints } from ".";
import { Nullable } from "../types/nullable";
import { handleResponse } from "../helpers/handleResponse";
import { handleException } from "../helpers/handleException";

export const login = async (loginData: LoginData): Promise<Nullable<LoginResponse>> => {
	try {
		const response: AxiosResponse<LoginResponse> = await axios.post(
			endpoints.login,
			loginData,
			{
				withCredentials: true,
				withXSRFToken: true,
			}
		);
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};

export const logout = async (token: string): Promise<Nullable<Nullable<LogoutResponse>>> => {
	try {
		const response: AxiosResponse<LogoutResponse> = await axios.get(endpoints.logout, {
			headers: {
				Authorization: 'Bearer' + token
			},
			withCredentials: true,
			withXSRFToken: true,
		});
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};

export const refresh = async (token: string): Promise<Nullable<RefreshResponse>> => {
	try {
		const response: AxiosResponse<RefreshResponse> = await axios.get(endpoints.refresh, {
			headers: {
				Authorization: 'Bearer' + token
			},
			withCredentials: true,
			withXSRFToken: true,
		});
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};
