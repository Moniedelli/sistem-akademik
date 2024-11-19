"use client";
import { apiClient } from "@/libs/api.client";
import { SignInSchemaType } from "@/schemas/auth.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

async function signInFn(values: SignInSchemaType) {
	const response = await apiClient.post("/auth/login", values);
	return response;
}

export function useSignIn(redirect: string) {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: signInFn,
		onMutate(variables) {
			console.log(variables);
		},
		onSuccess: () => {
			window.location.replace(redirect);
		},
		onError(error, variables, context) {
			const _error = error as AxiosError;
			console.log("error", _error.message);
		},
	});
}
