import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request: NextRequest) {
    // If you use a custom cookie name/prefix, pass them as the second arg
    // const sessionCookie = getSessionCookie(request, { cookieName: "my_session_cookie", cookiePrefix: "my_prefix" })
    const sessionCookie = getSessionCookie(request);
    const { pathname } = request.nextUrl;

    // If user is authenticated and tries to access login or signin, redirect to dashboard
    if (sessionCookie && (pathname === "/login" || pathname === "/signup")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // If user is not authenticated and tries to access protected routes, redirect to login
    const protectedRoutes = [
        "/dashboard",
        "/admin",
        "/checkout"
    ];
    const isProtected = protectedRoutes.some(route => pathname === route || pathname.startsWith(route + "/"));
    if (!sessionCookie && isProtected) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard",
        "/dashboard/:path*",
        "/admin",
        "/admin/:path*",
        "/checkout",
        "/checkout/:path*",
        "/login",
        "/signup"
    ],
};