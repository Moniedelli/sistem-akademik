"use client";
import React from "react";
import { SIGN_IN_FORM_FIELDS, SIGN_IN_FORM_DEFAULT_VALUES } from "@/constants";
import { useGenericForm, useSignIn } from "@/hooks";
import { SignInSchema } from "@/schemas/auth.schema";
/**
 *
 * ----------------------------------------------------------
 * Components
 * ----------------------------------------------------------
 *
 */
import { FormContainer } from "@/components/base/form/form.container";
import { Button } from "@/components/ui/button";
import { FormFieldList } from "@/components/base/form/list";

export const SignInForm: React.FC = () => {
	const form = useGenericForm(SignInSchema, {
		defaultValues: SIGN_IN_FORM_DEFAULT_VALUES,
	});
	const { mutate: handleSubmit, isLoading: disabled } = useSignIn();
	/**
	 * Return the actually component
	 */
	return (
		<FormContainer
			{...{ form, handleSubmit }}
			className="space-y-5 px-6 pb-6">
			<div className="space-y-2.5">
				<FormFieldList
					{...{ fields: SIGN_IN_FORM_FIELDS, control: form.control }}
				/>
			</div>
			<Button {...{ type: "submit", disabled }} className="w-full">
				Sign-In
			</Button>
		</FormContainer>
	);
};
