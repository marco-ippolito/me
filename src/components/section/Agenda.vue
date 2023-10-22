<template>
  <section class="container mx-auto flex flex-col min-h-[70dvh]">
    <div class="flex flex-wrap items-center">
      <h1 class="text-6xl m-10">Talks</h1>
      <div class="w-full md:w-1/3 lg:w-1/5 w-1/4 flex flex-col mr-10 mt-10">
        <input
          class="mx-auto w-4/5 bg-transparent border border-emerald-300 text-2xl rounded-lg placeholder:color-gray-200 focus:outline-none focus:border-#05f5ca px-4 color-gray-200 bg-gray-800"
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
    <div>
      <h2 class="text-4xl m-10">Next talks</h2>
      <template v-if="talks.nextTalks.length">
        <AgendaItem
          v-for="item in talks.nextTalks"
          :key="`${item.conference}${item.date}`"
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
          :key="`${item.conference}${item.date}`"
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
  </section>
</template>

<script setup lang="ts">
import agenda from "~/static/agenda.json";
import { useOramaSearch } from "~/composables/useOramaSearch";

const agendaOrderedByDate = agenda.sort((a, b) => {
  const dateA = getTimeFromItalianFormat(a.date);
  const dateB = getTimeFromItalianFormat(b.date);
  return dateB - dateA;
});

type Agenda = typeof agendaOrderedByDate;

const schema: Partial<Agenda[number]> = {
  conference: "string",
  talk: "string",
  city: "string",
};

const { searchTerm, searchResults } = await useOramaSearch({
  data: agendaOrderedByDate,
  schema,
});

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
