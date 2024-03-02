<script setup lang="ts">
import type { Result } from '@orama/orama'
import agenda from '~/static/agenda.json'
import {
  useOramaSearch,
} from '~/composables/useOramaSearch'

const agendaOrderedByDate = agenda.sort((a, b) => {
  const dateA = getTimeFromItalianFormat(a.date)
  const dateB = getTimeFromItalianFormat(b.date)
  return dateB - dateA
})

const schema = {
  conference: 'string',
  talk: 'string',
  city: 'string',
} as const

const { searchTerm, searchResults } = await useOramaSearch({
  data: agendaOrderedByDate,
  schema,
})

const talks = computed(() => {
  const documents = searchResults.value?.hits ?? agendaOrderedByDate.map(document => ({
    document,
  })) as Result<typeof agenda[number]>[]
  const { previousTalks, nextTalks } = getSeparateDocuments(documents)
  return { previousTalks, nextTalks }
})

function getSeparateDocuments<T extends { date: string }>(documents: Result<T>[]) {
  const previousTalks = []
  const nextTalks = []
  const today = new Date()

  for (const doc of documents) {
    const documentTime = getTimeFromItalianFormat(doc.document.date)
    const isPreviousTalk = documentTime < today.getTime()
    if (isPreviousTalk)
      previousTalks.push(doc)
    else
      nextTalks.push(doc)
  }

  return {
    previousTalks,
    nextTalks: nextTalks.sort(
      (a, b) =>
        getTimeFromItalianFormat(a.document.date)
        - getTimeFromItalianFormat(b.document.date),
    ),
  }
}
function getTimeFromItalianFormat(italianDate: string) {
  const [day, month, year] = italianDate.split('/')
  return new Date(`${year}-${month}-${day}`).getTime()
}
</script>

<template>
  <section class="mx-auto min-h-[70dvh] flex flex-col container">
    <div class="flex flex-wrap items-center">
      <h1 class="mx-10 text-6xl md:m-10">
        Talks
      </h1>
      <div class="mx-10 mt-10 w-1/4 w-full flex flex-col lg:w-1/5 md:w-1/3">
        <input
          v-model="searchTerm"
          class="mx-auto w-4/5 border-2 border-green-300 rounded-lg bg-transparent px-4 text-2xl color-gray-200 focus:border-emerald-200 placeholder:color-gray-200 focus:outline-none"
          type="text"
          placeholder="Search"
        >
        <div class="flex items-center justify-center gap-1 py-2 color-gray-300">
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
    <div class="flex flex-col">
      <div>
        <h2 class="m-10 text-4xl">
          Next talks
        </h2>
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
        <div v-else class="grid mx-auto flex-1 place-content-center container">
          <p class="text-2xl color-gray-200">
            No results found
          </p>
        </div>
      </div>
      <div>
        <h2 class="m-10 text-4xl">
          Previous talks
        </h2>
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

        <div v-else class="grid mx-auto flex-1 place-content-center container">
          <p class="text-2xl color-gray-200">
            No results found
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
