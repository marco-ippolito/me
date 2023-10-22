<template>
  <section class="container mx-auto">
    <div class="flex flex-wrap justify-between items-center">
      <h1 class="text-6xl m10">Agenda</h1>
      <pre>searchTerm: {{ searchTerm }}</pre>
      <input
        class="bg-transuarent border-b-2 border-gray-300 text-2xl h10 w-full md:w-1/3 lg:w-1/5 mx-10 rounded-lg placeholder:color-gray-300 focus:outline-none focus:border-#05f5ca px-4 color-gray-200 bg-gray-800"
        type="text"
        placeholder="Search"
        @input="handlerSearch"
      />
    </div>
    <template
      v-for="item in results"
      :key="`${item.conference}${item.date}`"
    >
      <AgendaItem
        v-if="!item.private"
        :link="item.link"
        :date="item.date"
        :title="`${item.conference} ${item.flag}`"
        :description="item.talk"
      />
    </template>
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
const { results, searchTerm , searchResultData, handlerSearch} = await useOramaSearch({
  data: agendaOrderedByDate,
  schema,
});
</script>
