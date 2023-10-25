<template>
  <section
    class="container home flex flex-col justify-start lg:justify-center gap-5 lg:gap-2 grainy"
  >
    <!--TODO: check how improve this part-->
    <NuxtImg
      class="absolute w-screen object-cover -z-10 h-full"
      sizes="100vw sm:50vw md:400px"
      src="/img/bg.png"
      alt="background"
      format="webp"
    />
    <main class="flex flex-col lg:flex-row px-10 lg:gap-5">
      <header class="flex-1 self-center mt-10">
        <h1 class="name font-big mb-10">
          Marco
          <span class="linear-animated">Ippolito</span>
        </h1>
      </header>
      <div
        class="flex-1 flex flex-col gap-4 items-center justify-center px-10 relative"
      >
        <NuxtImg
          height="300"
          width="300"
          src="/img/profile-removebg.png"
          alt="Marco Ippolito's profile photo"
          class="rounded-full"
          sizes="300 sm:380"
        />
      </div>
    </main>
    <aside class="flex flex-col items-center md:flex-row px-10">
      <div class="flex-1">
        <p class="text-xl lg:text-3xl card-mobile">
          I'm a
          <span class="font-bold">Senior Developer Experience Engineer</span> at
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
          <p class="text-xl">
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
  border-radius: 0.8rem;
  color: #f5f5f5;
  background-color: #242424;
  margin-bottom: 1.6rem;
  padding: 1.6rem 2.4rem;
  width: 100%;
}

.home {
  position: relative;
  height: 100%;
  @media screen and (min-width: 1280px) {
    height: 100vh;
  }
}

@media screen and (max-width: 768px) {
  .card-mobile {
    border: 1px solid #514d56;
    border-radius: 0.8rem;
    color: #f5f5f5;
    background-color: #242424;
    margin-bottom: 1.6rem;
    padding: 1.6rem 2.4rem;
    max-width: 20rem;
  }
}
</style>
