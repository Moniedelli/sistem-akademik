import { SignOutButton } from "@/components/base/sign-out.button";
import { getCookies } from "@/libs/cookies";
import { Encryption } from "@/libs/modules";

export default async function Page() {
	const session_token = Encryption.set("session_token");

	const token = await getCookies(session_token);
	if (token) {
		return (
			<div className="container">
				<table>
					<thead>
						<tr>
							<td>Name</td>
							<td>Value</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{String(token.name)}</td>
							<td>{String(token.value)}</td>
						</tr>
					</tbody>
				</table>
				<SignOutButton />
			</div>
		);
	}
	return (
		<div>
			<SignOutButton />
			<p>test</p>
		</div>
	);
}
