"use client";
import React from "react";

export function SignInHOC<T extends object>(
	BaseComponents: React.ComponentType<T>
) {
	const Form = (props: T) => {
		/**
		 * @todo - Implement Logic for form
		 *
		 */
		return <BaseComponents {...props} />;
	};
	return Form;
}
