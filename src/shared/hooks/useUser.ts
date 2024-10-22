import { User } from "@/entities/User/types/user";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { endpoints } from "../api";
import { useLocalStorage } from "./useLocalStorage";
import { MeResponse } from "../api/types/auth";
import { handleResponse } from "../helpers/handleResponse";
import { handleException } from "../helpers/handleException";
import { Nullable } from "../types/nullable";
import { SuccessResponse } from "../api/types/successResponse";

type UserError = string | null;

export function useUser(): { user: Nullable<User>; loading: boolean; error: UserError } {
	const [token] = useLocalStorage("token");
	const [user, setUser] = useState<Nullable<User>>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<UserError>(null);

	useEffect(() => {
		async function getUser(): Promise<void> {
            setLoading(true);
            setError(null);

			try {
				const response: AxiosResponse<MeResponse> = await axios.get(endpoints.me, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

                if(!response.data.success) setError(response.data.error);

                const user = (handleResponse(response) as SuccessResponse<User>).data;
                setUser(user);
			} catch (ex: unknown) {
				return handleException(ex);
			}
		}

		if(token) getUser();
        setLoading(false);
	}, [token]);

	return { user, loading, error };
}
