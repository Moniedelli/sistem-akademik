"use client";
import React from "react";
import { SignInSchema, SignInSchemaType } from "@/schemas/auth.schema";
import { UseGenericForm, useGenericForm } from "@/hooks";

export interface SignInFormProps {
	form: UseGenericForm;
	handleSubmit: (values: SignInSchemaType) => void;
}
export function SignInHOC<T extends object>(
	BaseComponents: React.ComponentType<T & SignInFormProps>
) {
	const Form = (props: T) => {
		/**
		 * @todo - Implement Logic for form
		 *
		 */
		const form = useGenericForm(SignInSchema, {
			defaultValues: {
				username: "",
				password: ""
			}
		});

		/**
		 * @todo - Implement Logic for submit actions
		 */
		function handleSubmit(values: SignInSchemaType) {
			const validatedValues = SignInSchema.safeParse(values);
			if (!validatedValues) {
				return undefined;
			}
			console.log({ values });
		}

		return <BaseComponents {...{ ...props, form, handleSubmit }} />;
	};
	return Form;
}
