"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DEFAULT_QUERY_STALE_TIME } from "@/constants";

export function QueryProvider({ children }: React.PropsWithChildren) {
	const [client] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						staleTime: DEFAULT_QUERY_STALE_TIME,
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
}
