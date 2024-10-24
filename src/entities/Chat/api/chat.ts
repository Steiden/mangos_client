import { MangosResponse } from "@/shared/api/types/mangosResponse";
import { handleException } from "@/shared/helpers/handleException"
import axios, { AxiosResponse } from "axios";
import { Chat } from "../types/chat";
import { endpoints } from "@/shared/api";
import { handleResponse } from "@/shared/helpers/handleResponse";

export const getChat = async (id: number, token: string) => {
    try {
        const response: AxiosResponse<MangosResponse<Chat>> = await axios.get(`${endpoints.chats}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        return handleResponse(response);
    }
    catch(ex) {
        return handleException(ex);
    }
}