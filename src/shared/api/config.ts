import { AxiosRequestConfig } from "axios";

export const getConfig = (token: string): AxiosRequestConfig => {
	return {
		headers: {
			Authorization: "Bearer " + token,
		},
		withCredentials: true,
		withXSRFToken: true,
	};
};
