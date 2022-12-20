<template>
  <button
    class="nav-link"
    @mouseenter="handleEnter(link)"
    @mouseleave="handleLeave(link)"
    @click="handleClick(link)"
  >
    <span class="type-display">{{ link }}</span>
    <svg
      width="300"
      height="12"
      viewBox="0 0 302 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :id="`line-${link}`" :d="attr01" stroke-width="0.5" />
    </svg>
  </button>
</template>
<script setup>
  import gsap from 'gsap'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  const props = defineProps({
    link: String,
  })
  const emit = defineEmits(['linkClicked'])

  const attr01 =
    'M0 1.00001C0 1 8.5 1 19.5 1C30.4264 1 30.6994 1 42.8571 1C55.1161 1 51.1389 1 63.4167 1C75.8481 1 72.6736 1 85.7143 1.00002C96.3966 1 96.0613 1 107.333 1C118.605 1 117.107 1.31257 128.571 1.00002C139.843 0.69271 139.953 1 151.25 1C162.38 1 159.537 1 171.429 1.00002C182.654 1 183.988 1 195.167 1C206.345 1 203.078 1 214.286 1.00002C225.04 1 225.368 1 236 1C246.853 1 246.2 1 257.143 1.00002C267.435 1 272.647 1 283 1C294.229 1 300 1 300 1'
  const attr02 =
    'M1 11C1 11 9.57358 1 20.5 0.999983C31.4264 1 31.6994 10.8563 43.8571 11C56.1161 11.1449 52.1389 1 64.4167 0.999983C76.8481 1 73.6736 11 86.7143 11C97.3966 11 97.0613 1.30729 108.333 0.999983C119.605 0.692671 118.107 11.3126 129.571 11C140.843 10.6927 140.953 1 152.25 0.999983C163.38 1 160.537 11 172.429 11C183.654 11 184.988 1 196.167 0.999983C207.345 1 204.078 11 215.286 11C226.04 11 226.368 1 237 0.999983C247.853 1 247.2 11 258.143 11C268.435 11 273.647 1 284 0.999983C295.229 1 300 10 300 10'

  const anim = ref(null)

  const handleEnter = name => {
    anim.value = gsap.fromTo(
      `#line-${name}`,
      {
        attr: { d: attr01 },
      },
      {
        attr: {
          d: attr02,
        },
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.out',
      }
    )
  }
  const handleLeave = name => {
    anim.value.kill()
    gsap.to(`#line-${name}`, {
      attr: { d: attr01 },
    })
  }
  const handleClick = link => {
    anim.value.kill()
    gsap.to(`#line-${link}`, {
      attr: { d: attr01 },
    })
    emit('linkClicked', link)
  }
  onMounted(() => {
    anim.value = null
  })
  // onBeforeUnmount(() => {
  //   anim.value = null
  // })
</script>
<style scoped></style>
