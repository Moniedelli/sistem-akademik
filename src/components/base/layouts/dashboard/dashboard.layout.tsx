import React from "react";
import { DashboardSidebar } from "@/components/base/layouts/dashboard/dashboard.sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardContainer } from "@/components/base/layouts/dashboard/dashboard.container";

export const DashboardLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<SidebarProvider defaultOpen={false}>
			<DashboardSidebar />
			<DashboardContainer>{children}</DashboardContainer>
		</SidebarProvider>
	);
};
