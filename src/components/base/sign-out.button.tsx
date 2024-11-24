"use client";
import { Button } from "@/components/ui/button";
import { AUTH_COOKIE_NAME } from "@/constants";
import { deleteCookie } from "@/libs/cookies";

export const SignOutButton = () => {
	async function handleClick() {
		await deleteCookie(AUTH_COOKIE_NAME);
		window.location.reload();
	}
	return (
		<Button onClick={handleClick} className="w-56">
			Sign-Out
		</Button>
	);
};
