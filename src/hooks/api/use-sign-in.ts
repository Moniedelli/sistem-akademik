"use client";
import { AxiosError } from "axios";
import { axiosInstance } from "@/libs";
import { SignInSchema, SignInSchemaType } from "@/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { API_ROUTE } from "@/constants";
import { setCookies } from "@/libs/cookies";

type AccountRole = "admin" | "guru" | "siswa";
interface SignInResponse {
	data: {
		token: string;
	};
	user: {
		username: string;
		role: AccountRole;
	};
	message: string;
}
async function signInFn(values: SignInSchemaType) {
	const validatedValues = SignInSchema.safeParse(values);
	/// Validated the values
	if (!validatedValues.success) {
		throw new Error("Error occurred");
	}
	const response = await axiosInstance.post<SignInResponse>(
		API_ROUTE.AUTH.SIGN_IN.POST,
		validatedValues.data,
	);
	return response;
}

export function useSignIn() {
	return useMutation({
		mutationFn: signInFn,
		onSuccess: async ({
			data: {
				data: { token },
				user,
			},
		}) => {
			try {
				setCookies("auth-token", token);
				console.log("redirect to:", API_ROUTE.AUTH.SIGN_IN.REDIRECT);
				window.location.replace(API_ROUTE.AUTH.SIGN_IN.REDIRECT);
			} catch (error) {
				throw new Error(`Error occurred`, error);
			}
		},
		onError(error: AxiosError, variables, context) {
			console.log("error", error);
		},
	});
}
