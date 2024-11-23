"use client";
import { Button } from "@/components/ui/button";
import { deleteCookie } from "@/libs/cookies";
import { Encryption } from "@/libs/modules";

export const SignOutButton = () => {
	async function handleClick() {
		const session_token = Encryption.set("session_token");
		await deleteCookie(session_token);
		window.location.reload();
	}
	return (
		<Button onClick={handleClick} className="w-56">
			Sign-Out
		</Button>
	);
};
