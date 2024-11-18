import React from "react";
import { SignInForm } from "@/components/base/form";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

export default function SignInPage() {
	const CSSVariables = {
		"--width-2xl": "350px",
		"--width-xl": "350px"
	} as React.CSSProperties;

	return (
		<main
			{...{ style: CSSVariables }}
			className="container flex h-screen min-h-screen w-full items-center justify-center py-8">
			<section className="grid h-full w-full grid-cols-2">
				<div className="shadow-border-muted hidden rounded-l-md bg-card md:block">
					Image
				</div>
				<Card className="shadow-border-muted col-span-full my-auto flex h-fit flex-col justify-center rounded-md border-none md:col-span-1 md:h-full md:rounded-l-none">
					<CardHeader className="md:pt-0">
						<CardTitle>Title</CardTitle>
						<CardDescription>Descriptions</CardDescription>
					</CardHeader>
					<SignInForm />
				</Card>
			</section>
		</main>
	);
}
