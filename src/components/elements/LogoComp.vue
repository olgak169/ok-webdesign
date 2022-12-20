<template>
  <button @click="$emit('logoClicked', 'main')" class="logo">
    <svg
      class="svg-overflow"
      width="80"
      height="81"
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="logo">
        <path
          id="o"
          d="M39.9579 10C23.3801 10 10 23.4642 10 40.0421C10 56.6199 23.3801 70 39.9579 70C56.5358 70 70 56.6199 70 40.0421C70 23.4642 56.5358 10 39.9579 10ZM60.1543 60.2384C49.5512 70.8415 31.9635 70.4208 20.7714 59.2286C9.57924 48.0365 9.15849 30.4488 19.7616 19.8457C30.3647 9.24264 48.0365 9.66339 59.1445 20.8555C70.3366 31.9635 70.7574 49.6353 60.1543 60.2384Z"
          fill="#DFCECE"
        />
        <circle
          id="inner"
          cx="30"
          cy="40"
          r="19.8"
          stroke="transparent"
          stroke-width="0.4"
        />
        <g id="outer">
          <circle cx="40" cy="40" r="39.5" stroke="transparent" />
          <circle class="fill" cx="72.5" cy="17.5" r="7.5" fill="transparent" />
          <circle class="fill" cx="24.5" cy="75.5" r="5.5" fill="transparent" />
        </g>
      </g>
    </svg>
  </button>
</template>

<script setup>
  defineEmits(['logoClicked'])
</script>
