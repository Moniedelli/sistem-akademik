import React from "react";
import { DashboardHeader } from "@/components/base/layouts/dashboard/dashboard.header";
import { SidebarInset } from "@/components/ui/sidebar";

export const DashboardContainer = ({ children }: React.PropsWithChildren) => {
	return (
		<SidebarInset>
			<DashboardHeader />
			{children}
		</SidebarInset>
	);
};
