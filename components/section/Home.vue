<template>
  <section class="container home flex flex-col justify-start lg:justify-center gap-5 lg:gap-2 lg:items-center">
    <main class="flex flex-col lg:flex-row px-10 lg:gap-5">
      <header class="flex-1 self-center">
        <h1 class="name font-big mb-10">
          Marco
          <span class="linear-animated">Ippolito</span>
        </h1>
      </header>
      <div class="flex-1 flex flex-col gap-4 items-center justify-center px-10 relative">
        <NuxtImg height="300" width="300" src="/img/profile-removebg.png" alt="Marco Ippolito's profile photo"
          class="rounded-full" sizes="300 sm:380" />
      </div>
    </main>
    <aside class="lg:flex px-10">
      <div class="flex-1">
        <p class="text-xl lg:text-3xl">
          I'm a
          <span class="font-bold">Senior Security Engineer</span> at
          <span class="linear-animated">
            <a href="https://www.herodevs.com/">HeroDevs</a>
          </span>. Passionate about the
          open source world, I'm a releaser and member of the Node.js Technical Steering Comittee.
        </p>
      </div>
    </aside>
  </section>
</template>

<style>
.glass {
  border: 1px solid #514d56;
  border-radius: 0.8rem;
  color: #f5f5f5;
  background-color: #242424;
  margin-bottom: 1.6rem;
  padding: 1.6rem 2.4rem;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .home {
    height: 100dvh;
  }
}

</style>
