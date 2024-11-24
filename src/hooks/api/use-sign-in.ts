"use client";

import { useMutation } from "@tanstack/react-query";
import { API_ROUTE, COOKIE_EXPIRES } from "@/constants";
import { setCookies } from "@/libs/cookies";
import { Encryption } from "@/libs/modules";
import { signInFn } from "@/libs/services";

export function useSignIn() {
	return useMutation({
		mutationFn: signInFn,
		onSuccess: async (data) => {
			const session_token = Encryption.set("session_token");

			/**
			 * This database token only available for protected routes
			 */
			await setCookies(session_token, data.data.token, {
				path: API_ROUTE.COOKIE_PATH,
				expires: COOKIE_EXPIRES,
				secure: process.env.NODE_ENV === "production",
				httpOnly: true,
				sameSite:
					process.env.NODE_ENV === "production" ? "strict" : "lax",
			});

			/**
			 * @todo - Generate new token for sign - in authentication
			 * and set in cookie, that token available for all routes
			 */
			window.location.replace(API_ROUTE.AUTH.SIGN_IN.REDIRECT);
		},
		onError(error) {
			console.log("error", error);
		},
	});
}
