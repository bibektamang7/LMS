import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { auth } from "./app/api/auth/[...nextauth]/options";
export const config = {
  matcher: [ "/sign-in", "/sign-up", "/", "/verify/:path*"],
};

export default auth(async function middleware(request) {
  const secret = process.env.AUTH_SECRET || ""
  
  const token = await getToken({req: request, secret, salt: '' });
  const url = request.nextUrl;

  // Redirect to dashboard if the user is already authenticated
  // and trying to access sign-in, sign-up, or home page
  if (
    token &&
    (url.pathname.startsWith("/login") ||
      url.pathname.startsWith("/signup") ||
      url.pathname.startsWith("/verify") ||
      url.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
});
