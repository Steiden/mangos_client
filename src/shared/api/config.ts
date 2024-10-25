import { AxiosRequestConfig } from "axios";
import { useLocalStorage } from "usehooks-ts";

export const getConfig = (token: string): AxiosRequestConfig => {
	return {
		headers: {
			Authorization: "Bearer " + token,
		},
		withCredentials: true,
		withXSRFToken: true,
	};
};
