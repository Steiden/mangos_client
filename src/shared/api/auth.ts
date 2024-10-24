import axios, { AxiosResponse } from "axios";
import { LoginData, LoginResponse, LogoutResponse, RefreshResponse } from "./types/auth";
import { endpoints } from ".";
import { Nullable } from "../types/nullable";
import { handleResponse } from "../helpers/handleResponse";
import { handleException } from "../helpers/handleException";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const login = async (loginData: LoginData): Promise<Nullable<LoginResponse>> => {
	try {
		const [token] = useLocalStorage("token");
		const response: AxiosResponse<LoginResponse> = await axios.post(
			endpoints.login,
			loginData,
			{
				headers: {
					Authorization: "Bearer " + token,
				},
				withCredentials: true,
				withXSRFToken: true,
			}
		);
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};

export const logout = async (): Promise<Nullable<Nullable<LogoutResponse>>> => {
	try {
		const response: AxiosResponse<LogoutResponse> = await axios.get(endpoints.logout, {
			withCredentials: true,
			withXSRFToken: true,
		});
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};

export const refresh = async (): Promise<Nullable<RefreshResponse>> => {
	try {
		const response: AxiosResponse<RefreshResponse> = await axios.get(endpoints.refresh, {
			withCredentials: true,
			withXSRFToken: true,
		});
		return handleResponse(response);
	} catch (ex: unknown) {
		return handleException(ex);
	}
};
