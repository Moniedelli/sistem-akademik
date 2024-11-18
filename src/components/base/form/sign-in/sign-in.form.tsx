"use client";
import React from "react";
import { FormContainer } from "@/components/base/form/form.container";
import {
	SignInFormProps,
	SignInHOC
} from "@/components/base/form/sign-in/sign-in.hoc";
import {
	FormFieldList,
	FieldConfig
} from "@/components/base/form/list/form-field.list";
import { SignInSchemaType } from "@/schemas/auth.schema";
import { Button } from "@/components/ui/button";

const LIST_FORM_FIELDS: Array<FieldConfig<SignInSchemaType>> = [
	{
		name: "username",
		type: "text",
		label: "Username",
		descriptions: "Input your username"
	},
	{
		name: "password",
		type: "password",
		label: "Password",
		descriptions: "Input your password"
	}
];
export const BaseSignInForm: React.FC<SignInFormProps> = ({ form }) => {
	/**
	 * @todo - create ui
	 */
	return (
		<FormContainer {...{ form }}>
			<FormFieldList
				{...{ fields: LIST_FORM_FIELDS, control: form.control }}
			/>
			<Button>Sign-In</Button>
		</FormContainer>
	);
};

export const SignInForm = SignInHOC(BaseSignInForm);
