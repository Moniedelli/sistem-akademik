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

export const SIGN_CONTENT = {
	FORM_TITLE: "Form Title",
	FORM_DESCRIPTIONS: "Form Descriptions",
	IMAGE_URL: "Image url"
};
