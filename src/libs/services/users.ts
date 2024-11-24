import { API_ROUTE } from "@/constants";
import { Roles, UsersResponse } from "@/interfaces";
import { authorizeAxiosInstance } from "@/libs/axios-instance";
import { AxiosResponse } from "axios";

export async function usersGetFn() {
	const response = await authorizeAxiosInstance.get<UsersResponse<Roles>>(
		API_ROUTE.ADMIN.USERS,
	);
	return response.data;
}
export async function usersPostFn(): Promise<AxiosResponse<unknown, unknown>> {
	const response = await authorizeAxiosInstance.post(API_ROUTE.ADMIN.USERS);
	return response.data;
}
