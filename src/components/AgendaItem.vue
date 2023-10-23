<template>
  <article class="agenda-item">
    <div class="text-2xl flex flex-col -gap-2">
      <a :href="props.link" target="_blank" class="decoration-none">
        <h2 class="color-#05f5ca font-bold">{{ props.title }}</h2>
      </a>
      <p class="color-gray-200">{{ props.description }}</p>
    </div>
    <p class="text-2xl color-gray-200">{{ props.date }}</p>
    <p class="text-2xl text-left lg:text-right">{{ city }}</p>
  </article>
</template>
<script setup lang="ts">
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
  @media screen and (min-width: 768px) {
    grid-template-columns: 4fr 1fr 2fr;
    align-items: center;
    gap: 4rem;
  }
}
.agenda-item:last-child {
  border-bottom: none;
}
</style>
