import { GuruDetail, Roles, SiswaDetail, UserDetails } from "@/interfaces";

export function assertIsString(data: unknown): asserts data is string {
	const isString = typeof data === "string" || data instanceof String;

	if (!isString) {
		throw new Error(
			`Expected a string but received ${typeof data}. Value: ${JSON.stringify(data)}`,
		);
	}
}

export function assertIsUndefined<T>(data: T | undefined): asserts data is T {
	if (data === undefined) {
		throw new Error(`Expected a value but received undefined.`);
	}
}

export function isSiswa(detail: UserDetails<Roles>): detail is SiswaDetail {
	return (detail as SiswaDetail) !== undefined;
}
export function isGuru(detail: UserDetails<Roles>): detail is GuruDetail {
	return (detail as GuruDetail) !== undefined;
}
