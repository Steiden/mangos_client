import { ErrorResponse } from "./errorResponse";
import { SuccessResponse } from "./successResponse";

export type MangosResponse<T> = SuccessResponse<T> | ErrorResponse;