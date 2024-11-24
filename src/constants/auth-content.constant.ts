import { FieldConfig } from "@/components/base/form";
import { Encryption } from "@/libs/modules";
import { SignInSchemaType } from "@/schemas/auth.schema";

export const AUTH_COOKIE_NAME = Encryption.set("session_token");
export const SIGN_IN_FORM_FIELDS: Array<FieldConfig<SignInSchemaType>> = [
	{
		name: "username",
		type: "text",
		label: "Username",
		placeholder: "Your Username",
		descriptions: "test",
	},
	{
		name: "password_hash",
		type: "password",
		label: "Password",
		placeholder: "Your Password",
		descriptions: "test",
	},
];
export const SIGN_IN_FORM_DEFAULT_VALUES: SignInSchemaType = {
	password_hash: "",
	username: "",
};

export const SIGN_CONTENT = {
	FORM_TITLE: "Form Title",
	FORM_DESCRIPTIONS: "Form Descriptions",
	IMAGE_URL: "Image url",
	FORM_LOGO: "url",
};
