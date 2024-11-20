import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_DB_HOST;

export const axiosInstance = axios.create({
	baseURL,
});
