import SignInPage from "@/app/(auth)/sign-in/page";
import { SIGN_CONTENT } from "@/constants";
import { render, screen } from "@testing-library/react";

jest.mock("@/components/base/form", () => ({
	SignInForm: () => <div data-testid="sign-form" />,
}));

describe("Sign-In Page", () => {
	it("render sign-in page", () => {
		render(<SignInPage />);

		expect(screen.getByRole("main")).toBeInTheDocument();
		expect(screen.getByText(SIGN_CONTENT.FORM_TITLE)).toBeInTheDocument();
		expect(
			screen.getByText(SIGN_CONTENT.FORM_DESCRIPTIONS),
		).toBeInTheDocument();
	});
});
