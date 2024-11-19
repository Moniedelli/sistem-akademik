import React from "react";
import { cn } from "@/libs/utils";
import { List } from "@/components/base/list";
import {
	FormControl,
	FormFeedback,
	FormField,
	FormItem,
	FormLabel
} from "@/components/ui/form";
import { Input, PasswordInput } from "@/components/ui/input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface FieldConfig<T extends FieldValues> {
	name: Path<T>;
	type: React.ComponentPropsWithoutRef<"input">["type"];
	label?: React.ReactNode | string;
	descriptions?: string;
	placeholder?: string | undefined;
}

interface FormFieldListProps<T extends FieldValues>
	extends React.ComponentPropsWithoutRef<"input"> {
	control: UseFormReturn<T>["control"];
	fields: Array<FieldConfig<T>>;
	classNameContainer?: string | undefined;
}
export function FormFieldList<T extends FieldValues>({
	fields,
	control,
	classNameContainer,
	...rest
}: FormFieldListProps<T>) {
	if (!Array.isArray(fields) || !fields)
		throw Error("Please provide valid fields");

	return (
		<List lists={fields}>
			{({ label, name, type, descriptions, placeholder }, key) => (
				<FormField
					key={key}
					name={name}
					control={control}
					render={({ field }) => (
						<FormItem className={cn(classNameContainer)}>
							{label && <FormLabel>{label}</FormLabel>}
							<FormControl>
								{type === "password" ? (
									<PasswordInput
										{...{
											...field,
											...rest,
											placeholder
										}}
									/>
								) : (
									<Input
										{...{ ...field, ...rest, placeholder }}
									/>
								)}
							</FormControl>
							<FormFeedback>{descriptions}</FormFeedback>
						</FormItem>
					)}
				/>
			)}
		</List>
	);
}
