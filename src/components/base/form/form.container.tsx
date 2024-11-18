"use client";
import React from "react";
import { Form } from "@/components/ui/form";
import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";
import { cn } from "@/utils";

interface FormContainerProps<T extends FieldValues>
	extends React.ComponentPropsWithoutRef<"form"> {
	form: UseFormReturn<T>;
	handleSubmit?: (data: T) => void;
}
export const FormContainer = <T extends FieldValues>({
	form,
	handleSubmit,
	className,
	...rest
}: FormContainerProps<T>) => {
	const onSubmit = handleSubmit
		? form.handleSubmit(
				(data: T) => handleSubmit(data),
				(error: FieldErrors<T>) => {
					console.error("Form submission error :", { ...error });
				}
			)
		: undefined;

	return (
		<Form {...form}>
			<form
				{...{
					...rest,
					onSubmit,
					className: cn("space-y-4", className)
				}}
			/>
		</Form>
	);
};
