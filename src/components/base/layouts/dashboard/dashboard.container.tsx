import React from "react";
import { DashboardHeader } from "@/components/base/layouts/dashboard/dashboard.header";

export const DashboardContainer = ({ children }: React.PropsWithChildren) => {
	return (
		<div>
			<DashboardHeader />
			{children}
		</div>
	);
};
