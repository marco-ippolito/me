<template>
  <ul
    class="flex gap-4 backdrop-blur-lg rounded-xl sticky top-0 z-50 p-4 bg-gray-900 bg-opacity-50"
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
