<template>
  <SvgBackground />
  <div
    class="flex flex-col w-full h-full items-center justify-center scroll-smooth z-100 mt-5 lg:mt-0 gap-5 lg:gap-10"
  >
    <header class="flex justify-end p-4 self-end">
      <ul class="flex gap-4 fixed">
        <li>github</li>
        <li>twitter</li>
        <li>linkedin</li>
        <li>twitch</li>
      </ul>
    </header>
    <section
      class="container home flex flex-col justify-start lg:justify-center gap-5 lg:gap-10"
    >
      <main class="flex flex-col lg:flex-row px-10 lg:gap-10 ">
        <header class="flex-1">
          <h1 class="name font-big mb-10">
            Marco
            <span class="ippolito">Ippolito</span>
          </h1>
        </header>
        <div class="flex-1 flex items-center justify-center px-10">
          <img
            loading="lazy"
            decoding="async"
            height="305"
            width="326.35"
            class="aspect-auto"
            src="~/assets/images/profile.png"
            alt="Marco Ippolito's profile photo"
          />
        </div>
      </main>
      <aside class="lg:flex px-10">
        <div class="flex-1">
          <p class="text-xl lg:text-3xl font-thin card-mobile">
            I'm a
            <span class="font-bold">Developer Experience Engineer</span> at
            NearForm. Passionate about the open source world, especially the
            Node.js ecosystem, I actively contribute to projects like Node.js,
            Fastify, Mercurius, and more.
          </p>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <article
            class="glass lg:gap-8 gap-4 max-w-xs lg:w-sm flex items-center flex-col lg:flex-row mt-8"
          >
            <NearformLogo />
            <p>
              NearForm creates software solutions that accelerate enterprise
              success, enrich customer experience and contribute to the
              development of our community.

              <a
                href="https://www.nearform.com/"
                target="_blank"
                class="color-white"
                >About it</a
              >
            </p>
          </article>
        </div>
      </aside>
    </section>
    <section class="container mx-auto min-h-screen">
      <h1 class="text-7xl m10">Agenda 2023</h1>
      <AgendaItem
        v-for="item in agenda"
        :key="`${item.conference}${item.date}`"
        :link="item.link"
        :date="item.date"
        :title="`${item.conference} ${item.flag}`"
        :description="item.talk"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import agenda from "~/static/agenda.json";

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

@media screen and (min-width: 768px) {
  .home {
    height: 90dvh;
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
  font-weight: 600;
  letter-spacing: 0.25rem;
}
.ippolito {
  background: linear-gradient(
        to bottom right,
        var(--primary-color) 0%,
        var(--secondary-color) 50%
      )
      bottom right / 50% 50% no-repeat,
    linear-gradient(
        to bottom left,
        var(--primary-color) 0%,
        var(--secondary-color) 50%
      )
      bottom left / 50% 50% no-repeat,
    linear-gradient(
        to top left,
        var(--primary-color) 0%,
        var(--secondary-color) 50%
      )
      top left / 50% 50% no-repeat,
    linear-gradient(
        to top right,
        var(--primary-color) 0%,
        var(--secondary-color) 50%
      )
      top right / 50% 50% no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
