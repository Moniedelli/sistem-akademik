import axios from "axios";
import { API_ROUTE } from "@/constants";

export const axiosInstance = axios.create({
	baseURL: API_ROUTE.BASE_URL,
});
