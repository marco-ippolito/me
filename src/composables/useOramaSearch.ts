import { Orama, Schema, create, insert, search } from "@orama/orama";
import { computedAsync } from "@vueuse/core";

export async function useOramaSearch<T extends Record<string, unknown>>({
  data,
  schema,
}: {
  data: T[];
  schema: Partial<T>;
}) {
  const searchTerm = ref("");
  const db = await create({
    schema,
  });

  for (const item of data) {
    // @ts-ignore
    await insert(db, item);
  }

  const searchResults = computedAsync(async () => {
    // NOTE: this schema it's useful only for the column we want index with orama
    // this is not the schema of the document
    // so orama should infer the type of the document from the data and not from the schema?
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
