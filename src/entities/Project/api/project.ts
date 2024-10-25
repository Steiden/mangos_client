import { MangosResponse } from "@/shared/api/types/mangosResponse";
import { handleException } from "@/shared/helpers/handleException";
import axios, { AxiosResponse } from "axios";
import { Project, ProjectFillable } from "../types/project";
import { endpoints } from "@/shared/api";
import { handleResponse } from "@/shared/helpers/handleResponse";

export const getProjects = async (token: string): Promise<MangosResponse<Project[]>> => {
	try {
		const response: AxiosResponse<MangosResponse<Project[]>> = await axios.get(
			endpoints.projects,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return handleResponse(response);
	} catch (ex) {
		return handleException(ex);
	}
};

export const getProject = async (id: number, token: string): Promise<MangosResponse<Project>> => {
	try {
		const response: AxiosResponse<MangosResponse<Project>> = await axios.get(
			`${endpoints.projects}/${id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return handleResponse(response);
	} catch (ex) {
		return handleException(ex);
	}
};

export const createProject = async (
	project: ProjectFillable,
	token: string
): Promise<MangosResponse<Project>> => {
	try {
		const response: AxiosResponse<MangosResponse<Project>> = await axios.post(
			endpoints.projects,
			project,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return handleResponse(response);
	} catch (ex) {
		return handleException(ex);
	}
};
