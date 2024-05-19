<template>
  <section class="container mx-auto h-full">
    <h1 class="text-6xl m10">Agenda</h1>
    <AgendaItem v-for="item in agendaOrderedByDate" :key="`${item.conference}${item.date}`" :link="item.link"
      :date="item.date" :title="`${item.conference} ${item.flag}`" :description="item.talk" />
  </section>
</template>

<script setup lang="ts">
import agenda from "~/static/agenda.json";

const agendaOrderedByDate = agenda
	.filter((item) => !item.private)
	.sort((a, b) => {
		const dateA = new Date(a.date.split("/").reverse().join("-")).getTime();
		const dateB = new Date(b.date.split("/").reverse().join("-")).getTime();
		return dateB - dateA;
	});
</script>
