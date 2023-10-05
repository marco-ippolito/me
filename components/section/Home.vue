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
        <div class="flex-1 flex items-center justify-center px-10">
          <NuxtImg
            src="/img/profile-removebg.png"
            alt="Marco Ippolito's profile photo"
            class="rounded-full"
            sizes="700 sm:350"
          />
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

</style>