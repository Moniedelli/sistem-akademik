import { API_ROUTE } from "@/constants";
import { Roles, UsersResponse } from "@/interfaces";
import { axiosInstance } from "@/libs/axios-instance";
import { AxiosResponse } from "axios";

export async function usersGetFn() {
	const response = await axiosInstance.get<UsersResponse<Roles>>(
		API_ROUTE.ADMIN.USERS,
	);
	return response.data;
}
export async function usersPostFn(): Promise<AxiosResponse<unknown, unknown>> {
	const response = await axiosInstance.post(API_ROUTE.ADMIN.USERS);
	return response.data;
}
