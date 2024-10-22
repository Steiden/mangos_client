import { AxiosResponse } from "axios";
import { MangosResponse } from "../api/types/mangosResponse";

export function handleResponse<T>(response: AxiosResponse<MangosResponse<T>>): MangosResponse<T> {
    if(!response.data.success) {
        throw new Error(response.data.error);
    }
    return response.data;
}