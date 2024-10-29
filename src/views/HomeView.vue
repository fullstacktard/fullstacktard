<template>
  <div class="flex flex-col items-center h-screen justify-center w-screen home">
    <div class="text-wrapper">
      <h1 class="text">fullstacktard</h1>
      <span class="text flicker" aria-hidden="true">fullstack</span>
    </div>
    <div class="text-white mt-4 text-2xl">I build shit cool</div>
    <div class="grid grid-cols-3 gap-4 text-white mt-4 text-2xl">
      <div class="col-span-1">
        <font-awesome-icon :icon="['fab', 'x-twitter']" />
      </div>
      <div class="col-span-1">
        <font-awesome-icon :icon="['fab', 'telegram']" />
      </div>
      <div class="col-span-1">
        <font-awesome-icon :icon="['fab', 'github']" />
      </div>
    </div>
    <div class="text-white mt-4 text-xl">Stuff Pending</div>
  </div>
</template>

<script>
import { gsap } from "gsap"; // Keep if you plan to use GSAP animations later
export default {};
</script>

<style>
.home {
  background: linear-gradient(45deg, #2d2d2d 9%, #000 100%);
}

.text-wrapper {
  position: relative;
}

h1 {
  color: #515151;
}
.text {
  font-family: "Fira Mono", monospace;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  font-size: 9vw;
  line-height: 1;
  margin: 0;
}
@screen lg {
  .text {
    font-family: "Fira Mono", monospace;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    font-size: 5vw;
    line-height: 1;
    margin: 0;
  }
}

.flicker {
  position: absolute;
  color: #00ff00;
  left: 0;
  top: 0;
  z-index: 1;
  animation: periodicFlicker 5s infinite;
}

@keyframes periodicFlicker {
  0%,
  70% {
    opacity: 1;
  }
  71%,
  72% {
    opacity: 0;
  }
  73%,
  74% {
    opacity: 1;
  }
  75%,
  76% {
    opacity: 0;
  }
  77%,
  100% {
    opacity: 1;
  }
}
</style>
