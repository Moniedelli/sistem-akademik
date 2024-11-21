import { Routes } from "@/libs/modules";

export const PREFIX_ROUTES = Routes.create({
	HOME: "/",
	SIGN_IN: "/sign-in",
	ADMIN: "/admin",
});

/// Define API routes
const API = Routes.create({
	BASE_URL: process.env.NEXT_PUBLIC_DB_HOST,
	SIGN_IN_REDIRECT: PREFIX_ROUTES.get("HOME"),
	SIGN_IN_POST: "/auth/login",
});

/// Define API authentication routes
const API_AUTH_ROUTES = {
	SIGN_IN: {
		REDIRECT: PREFIX_ROUTES.get("HOME"),
		POST: API.get("SIGN_IN_POST"),
	},
};

/// Combine API routes into single export
export const API_ROUTE = {
	BASE_URL: API.get("BASE_URL", "/localhost"),
	AUTH: API_AUTH_ROUTES,
};
