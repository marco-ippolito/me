<template>
  <SvgBackground />
  <div
    class="flex flex-col w-full h-full items-center justify-center scroll-smooth z-100 mt-5 lg:mt-0 gap-5 lg:gap-10"
  >
    <SectionHome />
    <SectionAgenda />
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
.agenda {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
  margin: 0 2rem;
  grid-column: 1 / -1;
}
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
