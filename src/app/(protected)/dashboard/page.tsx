import { TestAuthorization } from "@/app/(protected)/dashboard/_components/test-authorization";
import { SignOutButton } from "@/components/base/sign-out.button";

export default function DashboardPage() {
	return (
		<main>
			<p>test</p>
			<SignOutButton />
			<TestAuthorization />
		</main>
	);
}
