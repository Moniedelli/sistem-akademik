"use client";
import { usersGetFn } from "@/libs/services";
import { useQuery } from "@tanstack/react-query";

export function useUserGet() {
	return useQuery({
		queryKey: ["users"],
		queryFn: usersGetFn,
	});
}
