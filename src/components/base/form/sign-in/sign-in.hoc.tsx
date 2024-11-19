"use client";
import React from "react";
import { SignInSchema, SignInSchemaType } from "@/schemas/auth.schema";
import { UseGenericForm, useGenericForm } from "@/hooks";
import { useSignIn } from "@/hooks/api";

export interface SignInFormProps {
	form: UseGenericForm;
	handleSubmit: (values: SignInSchemaType) => void;
	loading: boolean;
}
export function SignInHOC<T extends object>(
	BaseComponents: React.ComponentType<T & SignInFormProps>,
) {
	const Form = (props: T) => {
		/**
		 * @todo - Implement Logic for form
		 *
		 */
		const { isLoading: loading, mutate } = useSignIn("/");
		const form = useGenericForm(SignInSchema, {
			defaultValues: {
				username: "",
				password: "",
			},
		});

		/**
		 * @todo - Implement Logic for submit actions
		 */
		function handleSubmit(values: SignInSchemaType) {
			const validatedValues = SignInSchema.safeParse(values);
			if (!validatedValues) {
				return undefined;
			}
			mutate(values);
		}

		return (
			<BaseComponents {...{ ...props, form, handleSubmit, loading }} />
		);
	};
	return Form;
}
