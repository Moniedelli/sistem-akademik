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
import { format } from "date-fns";
import { FORMAT_DD_MMMM_YYYY } from "@/constants";

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
					<TableHead>Created At</TableHead>
					<TableHead>Updated At</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<List lists={response?.data}>
					{({ id_user, role, username, date_and_time }, key) => (
						<TableRow key={key}>
							<TableCell>{id_user}</TableCell>
							<TableCell>{username}</TableCell>
							<TableCell>{role}</TableCell>
							<TableCell>
								{format(
									date_and_time.created_at,
									FORMAT_DD_MMMM_YYYY,
								)}
							</TableCell>
							<TableCell>
								{format(
									date_and_time.updated_at,
									FORMAT_DD_MMMM_YYYY,
								)}
							</TableCell>
						</TableRow>
					)}
				</List>
			</TableBody>
		</Table>
	);
};
