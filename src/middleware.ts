import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { auth } from "./app/api/auth/[...nextauth]/options";
export const config = {
  matcher: ["/sign-in", "/sign-up", "/", "/verify/:path*,'/dashboard/:path*','/payment/:path*", '/my-course/:path*','/video/:path*'],
};

export default auth(async function middleware(request) {
  const secret = process.env.AUTH_SECRET || ""
  
  const token = await getToken({req: request, secret, salt: '' });
  console.log(token)
  const url = request.nextUrl;

  if (
    token &&
    (url.pathname.startsWith("/login") ||
      url.pathname.startsWith("/signup") ||
      url.pathname.startsWith("/verify") ||
      url.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // if (!token &&
  //   (url.pathname.startsWith("/dashboard") ||
  //   url.pathname.startsWith('/payment') ||    
  //   url.pathname.startsWith('/video') ||    
  //   url.pathname.startsWith('/my-course')     
  // )) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return NextResponse.next();
});
