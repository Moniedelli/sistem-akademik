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
