<template>
  <SvgBackground />
  <div
    class="flex flex-col w-full h-full items-center justify-center scroll-smooth z-100 mt-5 lg:mt-0 gap-5 lg:gap-10"
  >
    <Socials />
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
// const dark = useDark();
</script>

<style>
.glass {
  --start: #252525;
  --end: #000000;
  background-color: var(--end);
  background-image: linear-gradient(
    110deg,
    var(--start) 0%,
    var(--start) 28%,
    var(--end) 56%,
    var(--end) 100%
  );
  border-radius: var(--border-radius);
  border: var(--border);
  box-shadow: 0 4px 30px #0000001a;
  padding: 2rem;
}

@media screen and (min-width: 768px) {
  .home {
    height: 100vh;
  }
}

@media screen and (max-width: 768px) {
  .card-mobile {
    --start: #3a3a3a;
    --end: #0f0f0f;
    --space-l: 2rem;
    background-color: var(--end);
    background-image: linear-gradient(
      110deg,
      var(--start) 0%,
      var(--start) 28%,
      var(--end) 56%,
      var(--end) 100%
    );
    border-radius: var(--border-radius);
    border: var(--border);
    box-shadow: 0 4px 30px #0000001a;
    padding: var(--space-l);
  }
}

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
  animation: flow 6s linear infinite;
}

</style>
