import { OramaSchema } from "./types";
export async function useOramaSearch<T extends Record<string, any>>({
  data,
  schema,
}: {
  data: T[];
  schema: OramaSchema<T>;
}) {
  const searchTerm = ref("");
  const results = ref<T[]>(data);

  const db = await create({
    schema,
  });

  for (const item of data) {
    await insert(db, item);
  }

  async function handlerSearch(event: Event) {
    if (!event?.target?.value) return;
    const results_ = await search(db, {
      term: event.target.value,
    });
    // @ts-ignore
    results.value = results_.hits.map((item) => item.document);
  }

  const searchResult = computedAsync(async () => {
    const searchResult_ = await search(db, {
      term: searchTerm.value,
    });
    return searchResult_;
  });

  const searchResultData = computed(
    () => searchResult.value?.hits?.map((item) => item.document) || []
  );
  return {
    searchTerm,
    searchResult,
    searchResultData,
    handlerSearch,
    results
  };
}
