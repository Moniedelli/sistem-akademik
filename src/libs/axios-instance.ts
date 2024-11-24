import axios, { AxiosError } from "axios";
import { API_ROUTE, AUTH_COOKIE_NAME } from "@/constants";
import { getCookies } from "@/libs/cookies";
import { Encryption } from "@/libs/modules";
import { assertIsUndefined } from "@/libs/utils";

export const axiosInstance = axios.create({
	baseURL: API_ROUTE.BASE_URL,
});

export const authorizeAxiosInstance = axios.create({
	baseURL: API_ROUTE.BASE_URL,
});

authorizeAxiosInstance.interceptors.request.use(
	async (config) => {
		const token = await getCookies(AUTH_COOKIE_NAME);
		assertIsUndefined(token);

		config.headers.Authorization = `Bearer ${token.value}`;
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);
