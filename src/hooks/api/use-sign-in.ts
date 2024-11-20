"use client";
import { AxiosError } from "axios";
import { axiosInstance } from "@/libs";
import { SignInSchema, SignInSchemaType } from "@/schemas/auth.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_ROUTE } from "@/constants";

async function signInFn(values: SignInSchemaType) {
	const validatedValues = SignInSchema.safeParse(values);
	/// Validated the values
	if (!validatedValues.success) {
		throw new Error("Error occurred");
	}
	const response = await axiosInstance.post(
		API_ROUTE.AUTH.SIGN_IN.POST,
		validatedValues.data,
	);
	return response;
}

export function useSignIn() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: signInFn,
		onSuccess: () => {
			window.location.replace(API_ROUTE.AUTH.SIGN_IN.REDIRECT);
		},
		onError(error: AxiosError, variables, context) {
			console.log("error", error);
		},
	});
}
