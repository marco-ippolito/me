<template>
  <section
    class="container home flex flex-col justify-start lg:justify-center gap-5 lg:gap-10"
  >
    <main class="flex flex-col lg:flex-row px-10 lg:gap-10">
      <header class="flex-1">
        <h1 class="name font-big mb-10">
          Marco
          <span class="linear-animated">Ippolito</span>
        </h1>
      </header>
      <div class="flex-1 flex flex-col gap-4 items-center justify-center px-10 relative">
        <NuxtImg
          src="/img/profile-removebg.png"
          alt="Marco Ippolito's profile photo"
          class="rounded-full"
          sizes="300 sm:380"
        />
        <Socials class="sticky"/>
      </div>
    </main>
    <aside class="lg:flex px-10">
      <div class="flex-1">
        <p class="text-xl lg:text-3xl font-200 card-mobile">
          I'm a
          <span class="font-bold">Developer Experience Engineer</span> at
          <span class="linear-animated">NearForm</span>. Passionate about the
          open source world, especially the Node.js ecosystem, I actively
          contribute to projects like Node.js, Fastify, Mercurius, and more.
        </p>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <article
          class="glass lg:gap-8 gap-4 max-w-xs lg:max-w-lg flex items-center flex-col lg:flex-row mt-8"
        >
          <NearformLogo />
          <p class="text-xl font-400">
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
</template>

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
</style>
