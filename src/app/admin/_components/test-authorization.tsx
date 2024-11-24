"use client";
import React from "react";
import { useUserGet } from "@/hooks";
import { List } from "@/components/base/list";

export const TestAuthorization = () => {
	const { data: response, isLoading } = useUserGet();
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<List lists={response?.data}>
				{({ username, detail }, key) => {
					return (
						<ul key={key}>
							<li>{key + 1}</li>
							<li>{username}</li>
							{detail ? (
								<div>
									<li>{detail.nama}</li>
									<li>{detail.no_telepon}</li>
									<li>{detail.email}</li>
								</div>
							) : null}
						</ul>
					);
				}}
			</List>
		</div>
	);
};
