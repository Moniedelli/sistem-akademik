import * as React from "react";

import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

/**
 *
 * ----------------------------------------------------------
 * Custom Input Components
 * ----------------------------------------------------------
 *
 */

interface PasswordInput extends React.ComponentPropsWithoutRef<"input"> {
	buttonVariants?: VariantProps<typeof buttonVariants>;
}
export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInput>(
	({ className, buttonVariants, ...rest }, ref) => {
		const [isActive, setActive] = React.useState<boolean>(false);
		const disabled =
			rest.value === "" || rest.value === undefined || rest.disabled;

		function onClick(
			event: React.MouseEvent<HTMLButtonElement, MouseEvent>
		) {
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
				</Button>
			</div>
		);
	}
);

PasswordInput.displayName = "PasswordInput";

export { Input };
