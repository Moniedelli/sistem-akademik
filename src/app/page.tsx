import { PREFIX_ROUTES } from "@/constants";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col gap-2">
			<Link href={PREFIX_ROUTES.HOME}>{PREFIX_ROUTES.HOME}</Link>
			<Link href={PREFIX_ROUTES.SIGN_IN}>{PREFIX_ROUTES.SIGN_IN}</Link>
			<Link href={PREFIX_ROUTES.ADMIN}>{PREFIX_ROUTES.ADMIN}</Link>
		</main>
	);
}
