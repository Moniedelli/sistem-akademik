"use client";
import { SignInHOC } from "@/components/base/form/sign-in/sign-in.hoc";

export const BaseSignInForm = () => {
	/**
	 * @todo - create ui
	 */
	return (
		<div>
			<h1>Form Components</h1>
		</div>
	);
};

export const SignInForm = SignInHOC(BaseSignInForm);
