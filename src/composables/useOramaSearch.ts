import type { Results, SearchableType } from '@orama/orama'
import { create, insert, search } from '@orama/orama'
import { computedAsync } from '@vueuse/core'

export type OramaSchemaCustom<T extends object> = Readonly<Partial<Record<keyof T, SearchableType>>>
export async function useOramaSearch<T extends Record<keyof T, any>, Schema = OramaSchemaCustom<T>>({ data, schema }: { data: T[], schema: Schema }) {
  const searchTerm = ref('')

  const db = await create({
    schema,
  })

  for (const item of data)
    await insert(db, item)

  const searchResults = computedAsync(async () => {
    const results: Results<T> = await search(db, {
      term: searchTerm.value,
      limit: 1000,
    })
    return results
  })

  return {
    searchTerm,
    searchResults,
  }
}
