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

export type OramaSchemaCustom<T extends {}> = Readonly<
	Partial<Record<keyof T, AllowedValues>>
>;
// biome-ignore lint: suspicious/noExplicitAny
export async function useOramaSearch<T extends Record<keyof T, any>>({
	data,
	schema,
}: {
	data: T[];
	schema: OramaSchemaCustom<T>;
}) {
	type DbDocument = TypedDocument<Orama<OramaSchemaCustom<T>>>;

	const searchTerm = ref("");

	const db: Orama<OramaSchemaCustom<T>> = await create({
		schema,
	});

	for (const item of data) {
		await insert(db, item);
	}

	const searchResults = computedAsync(async () => {
		const results: Results<DbDocument> = await search(db, {
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
