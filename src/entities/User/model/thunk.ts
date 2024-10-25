import { endpoints } from "@/shared/api";
import { MangosResponse } from "@/shared/api/types/mangosResponse";
import { handleException } from "@/shared/helpers/handleException";
import { handleResponse } from "@/shared/helpers/handleResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { User } from "../types/user";

export const updateUser = createAsyncThunk("auth/me", async (token: string) => {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await axios.get(endpoints.me, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			withCredentials: true,
			withXSRFToken: true,
		});
        return handleResponse(response);
	} catch (ex) {
		return handleException(ex);
	}
});
