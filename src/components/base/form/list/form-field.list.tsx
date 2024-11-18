import { InputPassword } from "@/components/base/form/input.password";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn, List } from "@/utils";
import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface FieldConfig<T extends FieldValues> {
	name: Path<T>;
	type: React.ComponentPropsWithoutRef<"input">["type"];
	label?: React.ReactNode | string;
	descriptions?: React.ReactNode | undefined;
	isButtonLabel?: boolean;
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
			{(
				{ label, name, type, descriptions, isButtonLabel, placeholder },
				key
			) => (
				<FormField
					key={key}
					name={name}
					control={control}
					render={({ field }) => (
						<FormItem className={cn(classNameContainer)}>
							{label && <FormLabel>{label}</FormLabel>}
							<FormControl>
								{type === "password" ? (
									<InputPassword
										{...{
											...field,
											...rest,
											isButtonLabel,
											placeholder
										}}
									/>
								) : (
									<Input
										{...{ ...field, ...rest, placeholder }}
									/>
								)}
							</FormControl>
							{descriptions && (
								<FormDescription>
									{descriptions}
								</FormDescription>
							)}
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
		</List>
	);
}
