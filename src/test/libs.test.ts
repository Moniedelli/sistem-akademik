import { API_ROUTE } from "@/constants";
import { axiosInstance } from "@/libs";

describe("libs", () => {
	it("should have the correct base path for the axios instance", () => {
		expect(axiosInstance.defaults.baseURL).toBe(API_ROUTE.BASE_URL);
	});
});
