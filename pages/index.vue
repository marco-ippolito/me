<template>
  <SvgBackground />
  <div
    class="flex flex-col w-full h-full items-center justify-center scroll-smooth z-100 mt-5 lg:mt-0 gap-5 lg:gap-10"
  >
    <Socials />
    <SectionHome />
    <SectionAgenda class="pt-10" id="agenda"/>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Marco Ippolito - Developer Experience Engineer",
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
