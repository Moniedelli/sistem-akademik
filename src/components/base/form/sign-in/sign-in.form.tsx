"use client";
import React from "react";
import { SIGN_IN_FORM_FIELDS } from "@/constants";
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
import {
	SignInFormProps,
	SignInHOC
} from "@/components/base/form/sign-in/sign-in.hoc";

export const BaseSignInForm: React.FC<SignInFormProps> = ({
	form,
	handleSubmit
}) => {
	return (
		<FormContainer
			{...{ form, handleSubmit }}
			className="space-y-5 px-6 pb-6 md:pb-0">
			<div className="space-y-2.5">
				<FormFieldList
					{...{ fields: SIGN_IN_FORM_FIELDS, control: form.control }}
				/>
			</div>
			<Button type="submit">Sign-In</Button>
		</FormContainer>
	);
};

export const SignInForm = SignInHOC(BaseSignInForm);
