<template>
  <article class="agenda-item">
    <h2 class="text-4xl lg:text-2xl">{{ props.date }}</h2>
    <div class="text-2xl flex flex-col -gap-2 flex-1" >
      <h3 class="color-#05f5ca">{{ props.title }}</h3>
      <p class="color-gray-200">{{ props.description }}</p>
    </div>
    <a :href="props.link" target="_blank" class="color-white">Discover more</a>
  </article>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  date: string;
  link: string;
}>();
</script>

<style>
.agenda-item {
  border: 1px solid white;
  border-radius: var(--border-radius);
  /* padding: 2rem 4rem; */
  padding: 1rem 2rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap:2rem;
  margin: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
  /* width: 100%; */
}
</style>
