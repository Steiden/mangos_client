import { NextRequest } from "next/server";

import { authMiddleware } from "./shared/middlewares/authMiddleware";

const middlewares = [authMiddleware];

export async function middleware(request: NextRequest) {
    middlewares.forEach(mdlwr => {
        mdlwr(request);
    })
}
