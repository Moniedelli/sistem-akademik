import { AUTH_ROUTES, PREFIX_ROUTES, PROTECTED_ROUTES } from "@/constants";
import { getCookies } from "@/libs/cookies";
import { Encryption } from "@/libs/modules";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const session_token = Encryption.set("session_token");
	const token = await getCookies(session_token);

	const { nextUrl, url } = request;

	const isInProtectedRoute = PROTECTED_ROUTES.includes(nextUrl.pathname);
	const isInAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);

	if (isInAuthRoute && token) {
		console.log("trigger auth route");
		return NextResponse.redirect(new URL(PREFIX_ROUTES.get("ADMIN"), url));
	}

	if (isInProtectedRoute && !token) {
		console.log("trigger protected route");
		return NextResponse.redirect(new URL(PREFIX_ROUTES.get("HOME"), url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*", "/sign-in"],
};
