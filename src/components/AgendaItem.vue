<template>
  <Link :to="props.link" target="blank" class="decoration-none text-white">
    <article class="agenda-item">
      <div class="text-2xl flex flex-col -gap-2">
        <h2 class="color-#05f5ca font-bold">{{ props.title }}</h2>
        <p class="color-gray-200">{{ props.description }}</p>
      </div>
      <p class="text-2xl text-left lg:text-center">
        {{ city }}
      </p>
      <p class="text-2xl color-gray-200 text-left lg:text-right">
        {{ props.date }}
      </p>
    </article>
  </Link>
</template>
<script setup lang="ts">
import Link from "./Link";

const props = defineProps<{
  title: string;
  description: string;
  date: string;
  link: string;
  city: string;
}>();
</script>

<style>
.agenda-item {
  border-bottom: 0.5px solid #666666;
  padding: 1rem 2rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  gap: 2rem;
  margin: 2rem;
  text-decoration: none;
  @media screen and (min-width: 1080px) {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 2;
    align-items: center;
    gap: 4rem;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 3fr 1fr 2fr;
  }
}
.agenda-item:last-child {
  border-bottom: none;
}
</style>
