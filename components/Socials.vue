<template>
  <ul
    class="flex flex-col gap-4 backdrop-blur-lg fixed bottom-5 left-2 sm:top-10 sm:left-10 z-100 sm:p-4 p-2 rounded-xl"
  >
    <li v-for="social in socials">
      <a :href="social.url" target="_blank" :arial-label="social['aria-label']">
        <NuxtImg width="25" height="25" :src="social.logo" :alt="social.alt" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import socials from "~/static/socials.json";
</script>
