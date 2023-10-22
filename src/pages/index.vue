<template>
  <svg class="absolute w-sceen">
    <filter id="noiseFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        result="noise"
        stitchTiles="stitch"
      />
    </filter>
  </svg>

  <NuxtImg
    class="absolute top-0 left-0 w-full h-full object-cover -z-10"
    sizes="100vw sm:50vw md:400px"
    src="/img/bg.png"
    alt="background"
    format="webp"
  />
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
body{
  overflow-x: auto;
}
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
.grainy::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 98%;
  border: 1px solid rgb(255, 255, 255);
  height: 90.5dvh;
  z-index: -9;
  opacity: 25%;
  background: #000000;
  filter: url(#noiseFilter);
  pointer-events: none;
}
</style>
