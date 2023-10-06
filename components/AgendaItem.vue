<template>
  <article class="agenda-item">
    <p class="text-2xl color-gray-200">{{ props.date }}</p>
    <div class="text-2xl flex flex-col -gap-2 flex-1 order-first">
      <h3 class="color-#05f5ca font-bold">{{ props.title }}</h3>
      <p class="color-gray-200">{{ props.description }}</p>
    </div>
    <a
      :href="props.link"
      target="_blank"
      class="color-gray-200 order-last pa-4 rounded-lg animated-border decoration-none font-bold"
      >Read More</a
    >
  </article>
</template>
2
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
  border-bottom: 0.5px solid #666666;
  /* padding: 2rem 4rem; */
  padding: 1rem 2rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  margin: 2rem;
  width: 85%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
  /* width: 100%; */
}
.agenda-item:last-child {
  border-bottom: none;
}

.animated-border {
  position: relative;
  box-sizing: border-box;
  color: #fff;
  background: #000;
  background-clip: padding-box;
  border: solid 2px transparent;
  animation: flow 6s linear infinite;
}

.animated-border:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -2px;
  border-radius: inherit;
  background: var(--linear-gradient);
  animation: animatedgradient 6s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
