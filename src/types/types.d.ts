import { NextResponse } from "next/server";
declare module "next-auth" {
    interface User{
        _id: string;
        username: string;
        role: string;
    }
    interface Session {
        user: User
    }
}

declare module "next/server" {
    interface NextRequest {
        auth: Session & {
            user: {
                _id: string;
                username: string;
                role: string;
            }
        } | null;
        _id: string;
    }
}