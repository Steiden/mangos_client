import { NextRequest } from "next/server";

export async function authMiddleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    // console.log("URL", path);
}