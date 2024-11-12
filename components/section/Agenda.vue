<template>
  <section class="container mx-auto h-full">
    <h1 class="text-6xl m10">Agenda</h1>
    <AgendaItem v-for="item in agendaOrderedByDate" :key="`${item.conference}${item.date}`" :link="item.link"
      :date="item.date" :title="`${item.conference} ${item.computedDate} ${item.flag}`" :description="item.talk" :slides="item.slides" />
  </section>
</template>

<script setup lang="ts">
import agenda from "~/static/agenda.json";

type ComputedItem = { computedDate?: string } & (typeof agenda)[0];

function getFullYear(date: string) {
	const { 2: year } = date.split("/");
	return year;
}

const agendaOrderedByDate = agenda
	.filter((item) => !item.private)
	.map((item: ComputedItem) => {
		item.computedDate = getFullYear(item.date);
		return item;
	})
	.sort((a, b) => {
		const dateA = new Date(a.date.split("/").reverse().join("-")).getTime();
		const dateB = new Date(b.date.split("/").reverse().join("-")).getTime();
		return dateB - dateA;
	});
</script>
