export type SuccessResponse<T> = {
    success: true;
    data: T;
    message: string;
}