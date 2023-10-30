import type { Orama, Results, SearchParams, TypedDocument } from "@orama/orama";
import { create, insert, search } from "@orama/orama";
import { computedAsync } from "@vueuse/core";
export type AllowedValues =
	| "string"
	| "number"
	| "boolean"
	| "enum"
	| "geopoint"
	| "string[]"
	| "number[]"
	| "boolean[]"
	| "enum[]"
	| `vector[${number}]`;

type OramaSchema<T extends {}> = Readonly<
	Partial<Record<keyof T, AllowedValues>>
>;

export async function useOramaSearch<T extends Record<keyof T, unknown>>({
	data,
	schema,
}: {
	data: T[];
	schema: OramaSchema<T>;
}) {
	const searchTerm = ref("");
	const db = await create({
		schema,
	});

	for (const item of data) {
		await insert(db, item);
	}

	const searchResults = computedAsync(async () => {
		const results = await search(db, {
			term: searchTerm.value,
			limit: 1000,
		});
		return results;
	});

	return {
		searchTerm,
		searchResults,
	};
}
