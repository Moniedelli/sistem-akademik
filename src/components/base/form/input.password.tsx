"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

interface InputPasswordProps extends React.ComponentPropsWithoutRef<"input"> {
	buttonVariants?: VariantProps<typeof buttonVariants>;
}
export const InputPassword = React.forwardRef<
	HTMLInputElement,
	InputPasswordProps
>(({ className, buttonVariants, ...rest }, ref) => {
	const [isActive, setActive] = React.useState<boolean>(false);
	const disabled =
		rest.value === "" || rest.value === undefined || rest.disabled;

	function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		// Prevent submit action
		event.preventDefault();
		setActive((prev) => !prev);
	}

	return (
		<div
			{...{
				"aria-label": "input-password",
				className: cn("relative")
			}}>
			<Input
				{...{
					ref,
					type: isActive ? "text" : "password",
					className: cn("pr-10", className),
					...rest
				}}
			/>
			<Button
				{...{
					...buttonVariants,
					onClick,
					disabled,
					className: cn(
						"absolute right-0 top-0 flex h-full items-center gap-1 rounded-l-none"
					)
				}}>
				{isActive && !disabled ? (
					<EyeClosedIcon aria-hidden={true} />
				) : (
					<EyeIcon aria-hidden={true} />
				)}
				<span>{isActive ? "Hide Password" : "Show Password"}</span>
			</Button>
		</div>
	);
});

InputPassword.displayName = "InputPassword";
