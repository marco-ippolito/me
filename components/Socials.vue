<template>
  <header class="flex p-4 self-start">
    <ul class="flex flex-col gap-4 fixed">
      <li v-for="social in socials">
        <a :href="social.url" target="_blank" :arial-label="social.arial-label">
          <NuxtImg width="25" height="25" :src="social.logo" :alt="social.alt"/>
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import socials from "~/static/socials.json";
</script>
