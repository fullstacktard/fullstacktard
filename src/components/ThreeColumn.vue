<template>
  <div
    data-aos="fade-in"
    data-aos-duration="1000"
    data-aos-delay="600"
    class="three-column mt-12 lg:mt-16 z-30"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="column-item"
      :style="{
        transform: `rotateY(${index % 2 === 0 ? '10deg' : '-10deg'}) `,
        filter: `brightness(${100}%)`,
      }"
    >
      <div class="content z-30">
        <slot name="item" :item="item" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.three-column {
  @apply flex flex-col items-center gap-16;
  perspective: 1200px;
  transform-style: preserve-3d;
}
@screen lg {
  .three-column {
    @apply flex flex-col items-center gap-24;
    perspective: 1200px;
    transform-style: preserve-3d;
  }
}

.column-item {
  @apply relative bg-opacity-20 rounded-xl py-8;
  width: 400px;
  height: auto;
  transform-style: preserve-3d;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.1),
    rgba(0, 255, 0, 0.05)
  );
}

.column-item:hover {
  transform: rotateY(0deg) !important;
}

.column-item::before,
.column-item::after {
  content: "";
  @apply absolute inset-0 rounded-xl;
  transform-style: preserve-3d;
}

.column-item::before {
  background: rgba(0, 255, 0, 0.05);
  transform: translateZ(-30px);
  filter: blur(2px);
}

.column-item::after {
  background: linear-gradient(45deg, transparent 50%, rgba(0, 255, 0, 0.1));
  transform: translateZ(-15px);
}

.content {
  @apply relative;
  transform: translateZ(30px);
}
</style>
