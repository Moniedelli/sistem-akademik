import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
	it("render the home page", () => {
		render(<Home />);
		expect(screen.getByRole("main")).toBeInTheDocument();
		expect(screen.getByText("main page")).toBeInTheDocument();
	});
});
