import { DashboardLayout } from "@/components/base/layouts";
import React from "react";

export default function ProtectedLayout({
	children,
}: Readonly<React.PropsWithChildren>) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
