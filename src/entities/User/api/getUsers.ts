import axios, { AxiosResponse } from "axios";
import { User } from "../types/user"
import { endpoints } from "@/shared/api";

export const getUsers = async (): Promise<User[]>  => {
    try {
        const response: AxiosResponse = await axios.get(endpoints.get_users);

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