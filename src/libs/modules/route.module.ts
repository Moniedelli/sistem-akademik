export class Routes<RoutesValues extends Record<string, unknown>> {
	private routes: RoutesValues;
	constructor(routes: RoutesValues) {
		this.routes = routes;
	}

	static create<
		Schema extends {
			[key: string]: unknown;
		},
	>(schema: Schema) {
		return new Routes(schema);
	}

	get<Key extends keyof RoutesValues>(key: Key): RoutesValues[Key];
	get<Key extends keyof RoutesValues>(
		key: Key,
		defaultValue: Exclude<RoutesValues[Key], undefined>,
	): Exclude<RoutesValues[Key], undefined>;
	get(key: string): string | undefined;
	get(key: string, defaultValue: unknown): unknown;
	get(key: string, defaultValue?: unknown): unknown {
		if (key in this.routes && this.routes[key] !== undefined) {
			return this.routes[key];
		}
		return defaultValue;
	}
	set<Key extends keyof RoutesValues>(
		key: Key,
		value: RoutesValues[Key],
	): void;
	set(key: string, value: unknown): void;
	set(key: string | keyof RoutesValues, value: unknown): void {
		(this.routes as Record<string, unknown>)[key as string] = value;
	}
}
