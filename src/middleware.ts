import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  
  const url = request.nextUrl;
  const path = url.pathname;
  const token = await getToken({ req: request });
  const protectedRoutes = ["/dashboard", "/payment", "/video", "/my-course"];
  if (path === "/api") {
    console.log("this is in middleware ", request);
  }
  
  if (token && (path.startsWith("/login") || path.startsWith("/signup"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && protectedRoutes.some(route => path.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    token && 
    path.startsWith("/dashboard") && 
    token.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/_error", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/dashboard/:path*",
    "/payment/:path*",
    "/my-course/:path*",
    "/video/:path*",
    // {
    //   source: "/((?!_next/static|_next/image|favicon.ico).*)",
    //   missing: [
    //     { type: "header", key: "next-router-prefetch" },
    //     { type: "header", key: "purpose", value: "prefetch" },
    //   ],
    // }
  ],
};