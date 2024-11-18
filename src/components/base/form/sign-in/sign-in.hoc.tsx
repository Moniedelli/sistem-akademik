"use client";
import { useGenericForm, UseGenericForm } from "@/hooks/use-generic-form";
import { SignInSchema } from "@/schemas/auth.schema";
import React from "react";

export interface SignInFormProps {
	form: UseGenericForm;
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
		return <BaseComponents {...{ ...props, form }} />;
	};
	return Form;
}
