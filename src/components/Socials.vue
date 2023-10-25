<template>
  <ul
    ref="socialsRef"
    class="w-full fixed flex gap-4 top-0 z-50 p-4 bg-opacity-50 justify-end pr-20"
  >
    <li>
      <NuxtLink to="/#agenda" aria-label="prova" active-class="color-white">
        <SvgCalendar />
      </NuxtLink>
    </li>
    <li v-for="social in socials">
      <NuxtLink
        :to="social.url"
        target="_blank"
        :arial-label="social['aria-label']"
      >
        <NuxtImg width="25" height="25" :src="social.logo" :alt="social.alt" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import socials from "~/static/socials.json";
const socialsRef = ref<HTMLElement | null>(null);
const isIntersecting = ref();
const { x, y } = useWindowScroll();
watch(y, () => {
  if (y.value > 250) {
    socialsRef.value?.classList.add(
      "backdrop-filter",
      "backdrop-blur-xl",
      "bg-black"
    );
  } else {
    socialsRef.value?.classList.remove(
      "backdrop-filter",
      "backdrop-blur-xl",
      "bg-black"
    );
  }
});
</script>
