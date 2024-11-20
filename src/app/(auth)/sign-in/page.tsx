import React from "react";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SIGN_CONTENT } from "@/constants";
import { SignInForm } from "@/components/base/form";
import { cn } from "@/libs/utils";

export default function SignInPage() {
	return (
		<main className="container flex h-screen min-h-screen w-full items-center justify-center py-8">
			<Card
				className={cn("overflow-hidden shadow-sm", "w-full md:w-1/2")}>
				<div className="h-48 w-full bg-blue-500"></div>
				<CardHeader>
					<CardTitle>{SIGN_CONTENT.FORM_TITLE}</CardTitle>
					<CardDescription>
						{SIGN_CONTENT.FORM_DESCRIPTIONS}
					</CardDescription>
				</CardHeader>
				<SignInForm />
			</Card>
		</main>
	);
}
