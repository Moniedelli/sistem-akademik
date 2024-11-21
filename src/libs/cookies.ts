"use server";
import { cookies } from "next/headers";

export async function setCookies(key: string, value: string) {
	return cookies().set(key, value);
}
export async function getCookies(key: string) {
	return cookies().get(key);
}
export async function deleteCookie(key: string) {
	return cookies().delete(key);
}
