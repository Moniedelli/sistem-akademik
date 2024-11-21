export const PREFIX_ROUTES = {
	HOME: "/",
	SIGN_IN: "/sign-in",
	ADMIN: "/admin",
};
const API_AUTH_ROUTES = {
	SIGN_IN: {
		REDIRECT: PREFIX_ROUTES.HOME,
		POST: "/auth/login",
	},
};
export const API_ROUTE = {
	BASE_URL: process.env.NEXT_PUBLIC_DB_HOST,
	AUTH: API_AUTH_ROUTES,
};
