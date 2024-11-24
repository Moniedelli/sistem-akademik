import axios, { AxiosError } from "axios";
import { API_ROUTE } from "@/constants";
import { getCookies } from "@/libs/cookies";
import { Encryption } from "@/libs/modules";
import { assertIsUndefined } from "@/libs/utils";

export const axiosInstance = axios.create({
	baseURL: API_ROUTE.BASE_URL,
});
axiosInstance.interceptors.request.use(
	async (config) => {
		const session_token = Encryption.set("session_token");
		const token = await getCookies(session_token);
		assertIsUndefined(token);

		config.headers.Authorization = `Bearer ${token.value}`;
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);
