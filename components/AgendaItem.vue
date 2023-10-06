<template>
  <article class="agenda-item">
    <h2 class="text-2xl lg:text-2xl order-">{{ props.date }}</h2>
    <div class="text-2xl flex flex-col -gap-2 flex-1 order-first" >
      <h3 class="color-#05f5ca">{{ props.title }}</h3>
      <p class="color-gray-200">{{ props.description }}</p>
    </div>
    <a :href="props.link" target="_blank" class="color-white order-last pa-4 rounded-lg animated-border">Discover more</a>
  </article>
</template>2
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
  border-bottom: 1px solid white;
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

.animated-border{
  position: relative;
  box-sizing: border-box;
  color: #FFF;
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
