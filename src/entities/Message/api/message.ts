import { MangosResponse } from "@/shared/api/types/mangosResponse";
import { Message, MessageForCreate } from "../types/message";
import { handleException } from "@/shared/helpers/handleException";
import axios, { AxiosResponse } from "axios";
import { endpoints } from "@/shared/api";
import { handleResponse } from "@/shared/helpers/handleResponse";

export const createMessage = async (
	message: MessageForCreate,
    token: string
): Promise<MangosResponse<Message>> => {
	try {
		const response: AxiosResponse<MangosResponse<Message>> = await axios.post(
			endpoints.messages,
			message,
			{
				headers: {
					Authorization: "Bearer " + token,
				},
				withCredentials: true,
				withXSRFToken: true,
			}
		);
		return handleResponse(response);
	} catch (ex) {
		return handleException(ex);
	}
};
