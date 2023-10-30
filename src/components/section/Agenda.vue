<template>
  <section class="container mx-auto flex flex-col min-h-[70dvh]">
    <div class="flex flex-wrap items-center">
      <h1 class="text-6xl mx-10 md:m-10">Talks</h1>
      <div class="w-full md:w-1/3 lg:w-1/5 w-1/4 flex flex-col mx-10 mt-10">
        <input
          class="mx-auto w-4/5 bg-transparent border-2 border-green-300 text-2xl rounded-lg placeholder:color-gray-200 focus:outline-none focus:border-emerald-200 px-4 color-gray-200"
          type="text"
          placeholder="Search"
          v-model="searchTerm"
        />
        <div class="flex py-2 color-gray-300 justify-center items-center gap-1">
          <p>powered by</p>
          <NuxtImg
            src="/logos/logo-orama-dark.svg"
            width="80"
            height="25"
            alt="Orama logo"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-4xl m-10">Next talks</h2>
        <template v-if="talks.nextTalks.length">
          <AgendaItem
            v-for="item in talks.nextTalks"
            :key="`${item.document.conference}${item.document.date}`"
            :link="item.document.link"
            :date="item.document.date"
            :title="`${item.document.conference}`"
            :description="item.document.talk"
            :city="`${item.document.city} ${item.document.flag}`"
          />
        </template>
        <div class="container mx-auto grid place-content-center flex-1" v-else>
          <p class="text-2xl color-gray-200">No results found</p>
        </div>
      </div>
      <div>
        <h2 class="text-4xl m-10">Previous talks</h2>
        <template v-if="talks.previousTalks.length">
          <AgendaItem
            v-for="item in talks.previousTalks"
            :key="`${item.document.city}${item.document.date}`"
            :link="item.document.link"
            :date="item.document.date"
            :title="`${item.document.conference}`"
            :description="item.document.talk"
            :city="`${item.document.city} ${item.document.flag}`"
          />
        </template>

        <div class="container mx-auto grid place-content-center flex-1" v-else>
          <p class="text-2xl color-gray-200">No results found</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import agenda from "~/static/agenda.json";
import {
  useOramaSearch,
  type OramaSchemaCustom,
} from "~/composables/useOramaSearch";
import type { Orama, Results, TypedDocument } from "@orama/orama";
import { create, insert, search } from "@orama/orama";
import { computedAsync } from "@vueuse/core";

const agendaOrderedByDate = agenda.sort((a, b) => {
  const dateA = getTimeFromItalianFormat(a.date);
  const dateB = getTimeFromItalianFormat(b.date);
  return dateB - dateA;
});

type AgendaArray = typeof agendaOrderedByDate;
// type Agenda = AgendaArray[number];
const schema = {
  conference: "string",
  talk: "string",
  city: "string",
} as const;

// const { searchTerm, searchResults} = await useOramaSearch({
//   data: agendaOrderedByDate,
//   schema,
// });

// this part is the same that return the composable
type Schema = TypedDocument<Orama<typeof schema>>;
const searchTerm = ref("");

const db:Orama<typeof schema> = await create({
  schema,
});

for (const item of agendaOrderedByDate) {
  await insert(db, item);
}
const searchResults = computedAsync(async () => {
  const results: Results<Schema> = await search(db, {
    term: searchTerm.value,
    limit: 1000,
  });
  return results;
});
// END
const talks = computed(() => {
  if (
    !searchResults.value?.hits.length ||
    searchResults.value?.hits.length !== searchResults.value.count
  )
    return { previousTalks: [], nextTalks: [] };
  const documents = searchResults.value.hits;
  const previousTalks = [];
  const nextTalks = [];
  const today = new Date();

  for (const doc of documents) {
    const documentTime = getTimeFromItalianFormat(doc.document.date);
    const isPreviousTalk = documentTime < today.getTime();
    if (isPreviousTalk) {
      previousTalks.push(doc);
    } else {
      nextTalks.push(doc);
    }
  }

  return {
    previousTalks,
    nextTalks: nextTalks.sort(
      (a, b) =>
        getTimeFromItalianFormat(a.document.date) -
        getTimeFromItalianFormat(b.document.date)
    ),
  };
});

function getTimeFromItalianFormat(italianDate: string) {
  const [day, month, year] = italianDate.split("/");
  return new Date(`${year}-${month}-${day}`).getTime();
}
</script>
