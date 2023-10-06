<template>
  <section class="agenda container mx-auto youtube_social_circle_dark">
    <h1 class="text-6xl m10">Agenda</h1>
    <template v-for="item in agenda" :key="`${item.conference}${item.date}`">
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
</script>

<style>
.agenda{
  height: 95dvh;
}
</style>