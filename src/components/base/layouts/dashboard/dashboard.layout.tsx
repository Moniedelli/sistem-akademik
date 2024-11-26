import React from "react";
import { DashboardSidebar } from "@/components/base/layouts/dashboard/dashboard.sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/base/layouts/dashboard/dashboard.header";

export const DashboardLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<SidebarProvider defaultOpen={false}>
			<DashboardSidebar />
			<SidebarInset>
				<DashboardHeader />
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
};
