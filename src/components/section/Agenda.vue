<template>
  <section class="container mx-auto flex flex-col min-h-[70dvh]">
    <div class="flex flex-wrap justify-between items-center">
      <h1 class="text-6xl m10 flex-1">Agenda</h1>
      <div class="w-full md:w-1/3 lg:w-1/5 w-1/4 flex flex-col mr-10">
        <input
          class="mx-auto w-4/5 bg-transparent border border-gray-300 text-2xl rounded-lg placeholder:color-gray-200 focus:outline-none focus:border-#05f5ca px-4 color-gray-200 bg-gray-800"
          type="text"
          placeholder="Search"
          v-model="searchTerm"
        />
        <div class="flex py-2 color-gray-300 justify-center items-center gap-1">
          <p>powered by</p>
          <NuxtImg src="/logos/logo-orama-dark.svg" width="80" height="25" alt="Orama logo"/>
        </div>
      </div>
    </div>
    <template
      v-if="searchResults?.hits.length"
      v-for="item in searchResults?.hits"
      :key="`${item.conference}${item.date}`"
    >
      <AgendaItem
        v-if="!item.document.private"
        :link="item.document.link"
        :date="item.document.date"
        :title="`${item.document.conference} ${item.document.flag}`"
        :description="item.document.talk"
      />
    </template>
    <div class="container mx-auto grid place-content-center flex-1" v-else>
      <p class="text-2xl color-gray-200">No results found</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import agenda from "~/static/agenda.json";
import { useOramaSearch } from "~/composables/useOramaSearch";
import type { OramaSchema } from "~/composables/types";
const agendaOrderedByDate = agenda.sort((a, b) => {
  const dateA = new Date(a.date.split("/").reverse().join("-")).getTime();
  const dateB = new Date(b.date.split("/").reverse().join("-")).getTime();
  return dateB - dateA;
});

type Agenda = typeof agendaOrderedByDate;

const schema: OramaSchema<Agenda[number]> = {
  date: "string",
  conference: "string",
  talk: "string",
  private: "boolean",
  flag: "string",
  link: "string",
};
const { searchTerm, searchResults } = await useOramaSearch({
  data: agendaOrderedByDate,
  schema,
});
</script>
