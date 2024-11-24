import {
	AUTH_COOKIE_NAME,
	AUTH_ROUTES,
	PREFIX_ROUTES,
	PROTECTED_ROUTES,
} from "@/constants";
import { getCookies } from "@/libs/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const token = await getCookies(AUTH_COOKIE_NAME);

	const { nextUrl, url } = request;

	const isInProtectedRoute = PROTECTED_ROUTES.includes(nextUrl.pathname);
	const isInAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);

	console.log("routes", nextUrl.pathname);
	if (isInAuthRoute && token) {
		console.log("trigger auth route");
		return NextResponse.redirect(
			new URL(PREFIX_ROUTES.get("DASHBOARD"), url),
		);
	}

	if (isInProtectedRoute && !token) {
		console.log("trigger protected route");
		return NextResponse.redirect(new URL(PREFIX_ROUTES.get("HOME"), url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/sign-in"],
};
