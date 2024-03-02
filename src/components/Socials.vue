<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import socials from '~/static/socials.json'

const socialsRef = ref<HTMLElement | null>(null)
// eslint-disable-next-line unused-imports/no-unused-vars
const { x, y } = useWindowScroll()
watch(y, () => {
  if (y.value > 250) {
    socialsRef.value?.classList.add(
      'backdrop-filter',
      'backdrop-blur-xl',
      'bg-black',
    )
  }
  else {
    socialsRef.value?.classList.remove(
      'backdrop-filter',
      'backdrop-blur-xl',
      'bg-black',
    )
  }
})
</script>

<template>
  <ul
    ref="socialsRef"
    class="fixed top-0 z-50 w-full flex justify-end gap-4 bg-opacity-50 p-4 pr-20"
  >
    <li>
      <NuxtLink to="/#agenda" aria-label="prova" active-class="color-white">
        <SvgCalendar />
      </NuxtLink>
    </li>
    <li v-for="social in socials" :key="social.name">
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
