<template>
  <SvgBackground />
  <div
    class="flex flex-col w-full h-full items-center justify-center scroll-smooth z-100 mt-5 lg:mt-0 gap-5 lg:gap-10 scroll-smooth"
  >
    <Socials />
    <SectionHome />
    <SectionAgenda class="pt-10 h-full" id="agenda" />
    <div class="w-full p-4 text-center bottom-0">
      <p>{{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Marco Ippolito - Senior Developer Experience Engineer",
  meta: [
    { name: "description", content: "My personal website" },
    { name: "author", content: "Marco Ippolito" },
  ],
});
</script>

<style>
.name {
  flex-shrink: 0;
  color: #fff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.25rem;
}
.linear-animated {
  background: var(--linear-gradient);
  background-clip: text;
  background-size: 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: flow 6s ease infinite;
}
</style>
