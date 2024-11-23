"use server";
import {
	RequestCookie,
	ResponseCookie,
} from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function setCookies(
	...args:
		| [key: string, value: string, cookie?: Partial<ResponseCookie>]
		| [options: ResponseCookie]
) {
	cookies().set(...args);
}
export async function getCookies(...args: [name: string] | [RequestCookie]) {
	return cookies().get(...args);
}
export async function deleteCookie(key: string) {
	return cookies().delete(key);
}
