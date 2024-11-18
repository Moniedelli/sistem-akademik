import { FieldConfig } from "@/components/base/form";
import { SignInSchemaType } from "@/schemas/auth.schema";

export const SIGN_IN_FORM_FIELDS: Array<FieldConfig<SignInSchemaType>> = [
	{
		name: "username",
		type: "text",
		label: "Username",
		placeholder: "Your Username"
	},
	{
		name: "password",
		type: "password",
		label: "Password",
		placeholder: "Your Password",
		isButtonLabel: false
	}
];
