"use client";
import { AxiosError } from "axios";
import { axiosInstance } from "@/libs";
import { SignInSchema, SignInSchemaType } from "@/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { API_ROUTE } from "@/constants";
import { setCookies } from "@/libs/cookies";
import { useRouter } from "next/navigation";

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
	const router = useRouter();
	return useMutation({
		mutationFn: signInFn,
		onSuccess: async ({
			data: {
				data: { token },
				user,
			},
		}) => {
			console.log(user);
			if (token) {
				try {
					await setCookies("auth-token", token);
					// Issue : not redirect after success login
					router.replace(API_ROUTE.AUTH.SIGN_IN.REDIRECT);
				} catch {
					throw new Error(`Error occurred`);
				}
			}
		},
		onError(error: AxiosError, variables, context) {
			console.log("error", error);
		},
	});
}
