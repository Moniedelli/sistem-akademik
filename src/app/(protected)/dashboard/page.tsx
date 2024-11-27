import { TestAuthorization } from "@/app/(protected)/dashboard/_components/test-authorization";
import { DashboardContainer } from "@/components/base/layouts";
import { SignOutButton } from "@/components/base/sign-out.button";

export default function DashboardPage() {
	return (
		<DashboardContainer>
			<SignOutButton />
			<TestAuthorization />
		</DashboardContainer>
	);
}
