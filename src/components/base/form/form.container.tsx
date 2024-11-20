"use client";
import React from "react";
import { Form } from "@/components/ui/form";
import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";
import { cn } from "@/libs/utils";

interface FormContainerProps<T extends FieldValues>
	extends React.ComponentPropsWithoutRef<"form"> {
	form: UseFormReturn<T>;
	handleSubmit?: (data: T) => void;
}
export const FormContainer = <T extends FieldValues>({
	form,
	handleSubmit: onValid,
	className,
	...rest
}: FormContainerProps<T>) => {
	/**
	 * onInvalid only for development purpose
	 * @template T - The generic type for the field error
	 * @param {FieldErrors<T>} error - The errors data
	 */
	const onInvalid = (error: FieldErrors<T>) => {
		if (process.env.NODE_ENV !== "production") {
			console.error("Form submission error:", error);
		}
	};

	const onSubmit = onValid
		? form.handleSubmit(onValid, onInvalid)
		: undefined;

	return (
		<Form {...form}>
			<form
				{...{
					...rest,
					onSubmit,
					className: cn("space-y-4", className),
				}}
			/>
		</Form>
	);
};
