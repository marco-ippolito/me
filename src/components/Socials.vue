<template>
  <ul
    class="w-full fixed flex gap-4 backdrop-blur-lg top-0 z-50 p-4 bg-opacity-50 justify-end pr-20"
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
import socials from "~/static/socials.json";
</script>
