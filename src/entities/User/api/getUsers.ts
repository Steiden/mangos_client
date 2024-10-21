import axios, { AxiosResponse } from "axios";
import { User } from "../types/user"
import { endpoints } from "@/shared/api";
import { SuccessResponse } from "@/shared/api/types/successResponse";
import { ErrorResponse } from "@/shared/api/types/errorResponse";

export const getUsers = async (): Promise<User[]>  => {
    try {
        const response: AxiosResponse<SuccessResponse<User[]> | ErrorResponse> = await axios.get(endpoints.users);

        if(!response.data?.success) {
            throw new Error(`${response.data?.message}: ${response.data?.error}`);
        }

        return response.data?.data;
    }
    catch (ex: unknown) {
        if(ex instanceof Error) {
            console.error(ex.message);
        } else {
            console.error('Неизвестная ошибка: ' + ex);
        }
        return [];
    }
}