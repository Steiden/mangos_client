import { User } from "@/entities/User/types/user";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { endpoints } from "../api";
import { useLocalStorage } from "./useLocalStorage";
import { MeResponse } from "../api/types/auth";
import { handleException } from "../helpers/handleException";
import { Nullable } from "../types/nullable";

type UserError = string | null;

export function useUser(): {
	user: Nullable<User>;
	loading: boolean;
	error: UserError;
	updateUser: () => void;
} {
	const [token] = useLocalStorage("token");
	const [user, setUser] = useState<Nullable<User>>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<UserError>(null);

	const updateUser = async (): Promise<void> => {
		setLoading(true);
		setError(null);

		try {
			const response: AxiosResponse<MeResponse> = await axios.get(endpoints.me, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				withCredentials: true,
				withXSRFToken: true
			});

			if (!response.data.success) {
				setError(response.data.error);
				return;
			}

			const me = response.data.data;
			setUser(me);
		} catch (ex: unknown) {
			return handleException(ex);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (token) updateUser();
	}, [token]);

	return { user, loading, error, updateUser };
}
