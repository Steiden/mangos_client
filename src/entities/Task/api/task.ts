import { handleException } from "@/shared/helpers/handleException";
import { TaskDeleteResponse, TaskFillable, TaskResponse, TasksResponse } from "../types/task";
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

export const createTask = async (data: TaskFillable, token: string): Promise<TaskResponse> => {
    try {
        const response: AxiosResponse<TaskResponse> = await axios.post(endpoints.tasks, data, getConfig(token));
        return handleResponse(response);
    }
    catch(ex) {
        return handleException(ex);
    }
}

export const updateTask = async (id: number, data: TaskFillable, token: string): Promise<TaskResponse> => {
    try {
        const response: AxiosResponse<TaskResponse> = await axios.put(`${endpoints.tasks}/${id}`, data, getConfig(token));
        return handleResponse(response);
    }
    catch(ex) {
        return handleException(ex);
    }
}
 
export const deleteTask = async (id: number, token: string): Promise<TaskDeleteResponse> => {
    try {
        const response: AxiosResponse<TaskDeleteResponse> = await axios.delete(`${endpoints.tasks}/${id}`, getConfig(token));
        return response.data;
    }
    catch(ex) {
        return handleException(ex);
    }
}