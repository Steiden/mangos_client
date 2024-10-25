import { handleException } from "@/shared/helpers/handleException";
import { TasksResponse } from "../types/task";
import axios, { AxiosResponse } from "axios";
import { endpoints } from "@/shared/api";
import { getConfig } from "@/shared/api/config";
import { handleResponse } from "@/shared/helpers/handleResponse";

export const getTasks = async (token: string): Promise<TasksResponse>  => {
    try {
        const response: AxiosResponse<TasksResponse> = await axios.get(endpoints.tasks, getConfig(token));
        return handleResponse(response);
    }
    catch(ex) {
        return handleException(ex);
    }
}