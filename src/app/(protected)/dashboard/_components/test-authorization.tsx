"use client";
import React from "react";
import { useUserGet } from "@/hooks";
import { List } from "@/components/base/list";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const TestAuthorization = () => {
	const { data: response, isLoading } = useUserGet();
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Id</TableHead>
					<TableHead>Username</TableHead>
					<TableHead>Role</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<List lists={response?.data}>
					{({ id_user, role, username }, key) => (
						<TableRow key={key}>
							<TableCell>{id_user}</TableCell>
							<TableCell>{username}</TableCell>
							<TableCell>{role}</TableCell>
						</TableRow>
					)}
				</List>
			</TableBody>
		</Table>
	);
};
