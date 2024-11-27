import React from "react";

export const DashboardContainer: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return <section className="h-full p-4 md:px-6">{children}</section>;
};
