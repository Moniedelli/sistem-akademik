import { Routes } from "@/libs/modules";

export const PREFIX_ROUTES = Routes.create({
	HOME: "/",
	SIGN_IN: "/sign-in",
	ADMIN: "/admin",
});

/// Validation ROutes
export const PROTECTED_ROUTES = [PREFIX_ROUTES.get("ADMIN")];
export const AUTH_ROUTES = [PREFIX_ROUTES.get("SIGN_IN")];

/// Define API routes
const API = Routes.create({
	BASE_URL: process.env.NEXT_PUBLIC_DB_HOST,
	SIGN_IN_REDIRECT: PREFIX_ROUTES.get("ADMIN"),
	SIGN_IN_POST: "/auth/login",
});

/// Define API authentication routes
const API_AUTH_ROUTES = {
	SIGN_IN: {
		REDIRECT: API.get("SIGN_IN_REDIRECT"),
		POST: API.get("SIGN_IN_POST"),
	},
};

/// Combine API routes into single export
export const API_ROUTE = {
	BASE_URL: API.get("BASE_URL", "/localhost"),
	AUTH: API_AUTH_ROUTES,
	COOKIE_PATH: PREFIX_ROUTES.get("HOME"),
};
