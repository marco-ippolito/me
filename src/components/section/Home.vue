<template>
  <section class="grainy home flex flex-col justify-start gap-5 container lg:justify-center lg:gap-4">
    <NuxtImg
      class="absolute top-0 h-full w-screen bg-black object-cover -z-10" src="/img/bg.png" alt="background"
      format="webp"
    />
    <!-- TODO: check how improve this part -->
    <main class="flex flex-col px-10 lg:flex-row lg:gap-5">
      <header class="mt-10 flex-1 self-center">
        <h1 class="name font-big mb-10">
          Marco
          <span class="linear-animated">Ippolito</span>
        </h1>
      </header>
      <div class="relative flex flex-1 flex-col items-center justify-center gap-4 px-10">
        <NuxtImg
          height="300" width="300" src="/img/profile-removebg.png" alt="Marco Ippolito's profile photo"
          class="rounded-full" sizes="300 sm:380"
        />
      </div>
    </main>
    <aside class="flex flex-col items-center px-10 md:flex-row">
      <div class="mr-4 flex-1 p-2">
        <p class="card-mobile text-lg lg:text-2xl">
          I'm a
          <span class="font-bold">Senior Developer Experience Engineer</span> at
          <span class="linear-animated">NearForm</span>. Passionate about the
          open source world, especially the Node.js ecosystem, I actively
          contribute to projects like Node.js, Fastify, Mercurius, and more.
        </p>
      </div>
      <article
        class="glass mx-4 mt-8 max-w-xs flex flex flex-1 flex-col items-center items-center justify-center gap-4 lg:max-w-md lg:flex-row lg:gap-8"
      >
        <NearformLogo />
        <p class="text-xl">
          NearForm creates software solutions that accelerate enterprise
          success, enrich customer experience and contribute to the
          development of our community.

          <a href="https://www.nearform.com/" target="_blank" class="color-white">About it</a>
        </p>
      </article>
    </aside>
  </section>
</template>
