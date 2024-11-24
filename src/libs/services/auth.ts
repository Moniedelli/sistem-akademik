import { API_ROUTE } from "@/constants";
import { SignInResponse } from "@/interfaces";
import { axiosInstance } from "@/libs/axios-instance";
import { SignInSchema, SignInSchemaType } from "@/schemas/auth.schema";

export async function signInFn(values: SignInSchemaType) {
	const validatedValues = SignInSchema.safeParse(values);
	/// Validated the values
	if (!validatedValues.success) {
		throw new Error("Validation Error");
	}
	const response = await axiosInstance.post<SignInResponse>(
		API_ROUTE.AUTH.SIGN_IN.POST,
		validatedValues.data,
	);
	return response.data;
}
