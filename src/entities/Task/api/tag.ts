import { handleException } from "@/shared/helpers/handleException";
import { TagsResponse } from "../types/tag";
import axios, { AxiosResponse } from "axios";
import { endpoints } from "@/shared/api";
import { getConfig } from "@/shared/api/config";
import { handleResponse } from "@/shared/helpers/handleResponse";

export const getTags = async (token: string): Promise<TagsResponse> => {
    try {
        const response: AxiosResponse<TagsResponse> = await axios.get(endpoints.tags, getConfig(token));
        return handleResponse(response);
    }
    catch(ex) {
        return handleException(ex);
    }
}