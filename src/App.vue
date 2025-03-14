<script setup>
import { RouterLink, RouterView } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";
onMounted(() => {
  AOS.init({
    offset: 200, // Trigger animation when element is 200px from viewport bottom
    delay: 0,
    once: false, // Allow animations to trigger every time element comes into view
  });
});
</script>

<template>
  <div class="w-screen flex-col relative font-Unison">
    <RouterView class="w-screen h-screen relative" />
  </div>
</template>

<style scoped></style>
