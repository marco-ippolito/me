<template>
  <div
    class="mt-5 h-full w-full flex flex-col items-center justify-center gap-5 overflow-x-hidden scroll-smooth lg:mt-0 lg:gap-10"
  >
    <Socials />
    <SectionHome />
    <SectionAgenda id="agenda" class="h-full pt-10" />
    <div class="w-full text-center">
      <p class="p-4 text-xl">
        {{ new Date().getFullYear() }}
      </p>
    </div>
  </div>
</template>
