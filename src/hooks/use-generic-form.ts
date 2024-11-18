"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps, UseFormReturn } from "react-hook-form";

export function useGenericForm<T extends z.ZodType>(
	schema: T,
	props?: Partial<Omit<UseFormProps<z.infer<T>>, "resolver">>
): UseFormReturn<z.TypeOf<T>> {
	const form: UseFormReturn<z.TypeOf<T>> = useForm<z.infer<T>>({
		resolver: zodResolver(schema),
		...props
	});

	return form;
}
export type UseGenericForm = ReturnType<typeof useGenericForm>;
