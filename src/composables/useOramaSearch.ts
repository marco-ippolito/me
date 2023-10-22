import { create, insert, search } from "@orama/orama";
import { computedAsync } from "@vueuse/core";
import { OramaSchema } from "./types";

export async function useOramaSearch<T extends Record<string, unknown>>({
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
    // @ts-ignore
    await insert(db, item);
  }

  const searchResults = computedAsync(async () => {
    const results = search(db, {
      term: searchTerm.value,
    });
    return results;
  });

  return {
    searchTerm,
    searchResults,
  };
}
