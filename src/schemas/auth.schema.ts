import * as z from "zod";

export const SignInSchema = z.object({
	username: z.string().min(1, {
		message: "Username is required!",
	}),
	password_hash: z.string().min(1, {
		message: "Password is required",
	}),
});
export type SignInSchemaType = z.infer<typeof SignInSchema>;
