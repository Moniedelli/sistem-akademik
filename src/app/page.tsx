import { PREFIX_ROUTES } from "@/constants";

import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col gap-2">
			<Link href={PREFIX_ROUTES.get("HOME")}>
				{PREFIX_ROUTES.get("HOME")}
			</Link>
			<Link href={PREFIX_ROUTES.get("SIGN_IN")}>
				{PREFIX_ROUTES.get("SIGN_IN")}
			</Link>
			<Link href={PREFIX_ROUTES.get("DASHBOARD")}>
				{PREFIX_ROUTES.get("DASHBOARD")}
			</Link>
		</main>
	);
}
