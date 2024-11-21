import { getCookies } from "@/libs/cookies";

export default async function Page() {
	const token = await getCookies("auth-token");
	if (token) {
		return (
			<div>
				<p>{String(token)}</p>
			</div>
		);
	}
	return (
		<div>
			<p>test</p>
		</div>
	);
}
