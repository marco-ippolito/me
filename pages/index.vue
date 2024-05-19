<template>
  <div
    class="flex flex-col w-full h-full items-center justify-center scroll-smooth mt-5 lg:mt-0 gap-5 lg:gap-10 scroll-smooth"
  >
    <Socials />
    <SectionHome />
    <SectionAgenda class="pt-10 h-full" id="agenda" />
    <div class="w-full text-center">
      <p class="p-4 text-xl">{{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(51, 51, 51);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34);
  border-radius: 5px;
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
