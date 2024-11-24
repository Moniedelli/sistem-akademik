import React from "react";
import { DashboardContainer } from "@/components/base/layouts/dashboard/dashboard.container";
import { DashboardSidebar } from "@/components/base/layouts/dashboard/dashboard.sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const DashboardLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<SidebarProvider defaultOpen={false}>
			<DashboardSidebar />
			<DashboardContainer>{children}</DashboardContainer>
		</SidebarProvider>
	);
};
