<template>
  <section class="container home flex flex-col justify-center items-center gap-10 overflow-x-hidden">
    <main class="flex flex-wrap items-center justify-between px-10" >
      <header class="mt-10 md:mt-0 w-1/2" >
        <h1 class="name font-big">
          Marco
          <span class="linear-animated">Ippolito</span>
        </h1>
      </header>
        <NuxtImg height="300" width="300" src="/img/profile-removebg.png" alt="Marco Ippolito's profile photo"
          class="rounded-full" sizes="300 sm:380" />
    </main>
    <aside class="px-10 mt-4">
        <p class="text-xl sm:text-3xl">
          I'm a
          <span class="font-bold">Senior Security Engineer</span> at
          <span class="linear-animated">
            <a href="https://www.herodevs.com/">HeroDevs</a>
          </span>. Passionate about the
          open source world, I'm a releaser and member of the Node.js Technical Steering Comittee.
        </p>
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
