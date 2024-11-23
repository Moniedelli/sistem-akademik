import { AUTH_ROUTES, PREFIX_ROUTES, PROTECTED_ROUTES } from "@/constants";
import { getCookies } from "@/libs/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const token = await getCookies("auth");
	const { nextUrl, url } = request;

	console.log(token);
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
