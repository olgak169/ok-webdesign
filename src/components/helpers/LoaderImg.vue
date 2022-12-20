<template>
  <div class="loader-img">
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle class="svg-loader-circle" cx="122.5" cy="190.5" r="64" stroke="#BCA5AF" />
        <circle class="svg-loader-circle" cx="185.5" cy="255.5" r="64" stroke="#BCA5AF" />
        <circle class="svg-loader-circle" cx="275.5" cy="413.5" r="64" stroke="#BCA5AF" />
        <circle class="svg-loader-circle" cx="404.5" cy="88.5" r="64" stroke="#BCA5AF" />
      </g>
    </svg>
  </div>
</template>
<script setup>
  import gsap from 'gsap'
  import { onMounted } from 'vue'
  onMounted(() => {
    gsap.to('.svg-loader-circle', {
      duration: 1.5,
      scale: 0.2,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
    })
  })
</script>
<style>
  .loader-img {
    width: 500px;
    height: 500px;
  }
</style>
