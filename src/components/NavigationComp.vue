<template>
  <header class="container-header flex">
    <LogoComp @logo-clicked="handleClick" />
    <div class="nav-btns" v-if="mobileMenu" :class="{ sticky: menuOpen }">
      <svg
        class="svg-overflow"
        :class="{ 'menu-open': menuOpen }"
        v-show="mobileMenu"
        @click="menuOpen = !menuOpen"
        viewBox="0 0 37 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="menu-btn">
          <g id="close" v-if="menuOpen">
            <path
              d="M8.56007 14.2479C6.59207 15.2239 4.08007 14.8399 2.36807 13.1279C0.240068 10.9999 0.160068 7.65594 2.17607 5.63994C4.09607 3.71994 7.21607 3.70394 9.34407 5.52794C9.47207 5.39994 9.58407 5.25594 9.69607 5.12794C8.70407 4.27994 7.42407 3.76794 6.01607 3.76794C2.86407 3.76794 0.320068 6.32794 0.320068 9.47994C0.320068 12.6319 2.86407 15.1759 6.01607 15.1759C6.83207 15.1759 7.61607 15.0159 8.32007 14.6959C8.81607 14.4719 9.28007 14.1839 9.69607 13.8319L9.61607 13.5439C9.29607 13.8319 8.94407 14.0719 8.56007 14.2479Z"
              fill="#DFCECE"
            />
            <path
              d="M11.8393 14.7439C11.8393 11.1439 11.8393 7.54394 11.8393 3.94394H11.3113V15.0159H14.5593C14.4793 14.9199 14.3993 14.8239 14.3193 14.7439H11.8393Z"
              fill="#DFCECE"
            />
            <path
              d="M19.9517 3.76794C16.7997 3.76794 14.2557 6.32794 14.2557 9.47994C14.2557 12.6319 16.7997 15.1759 19.9517 15.1759C23.1037 15.1759 25.6637 12.6319 25.6637 9.47994C25.6637 6.32794 23.1037 3.76794 19.9517 3.76794ZM23.7917 13.3199C21.7757 15.3359 18.4317 15.2559 16.3037 13.1279C14.1757 10.9999 14.0957 7.65594 16.1117 5.63994C18.1277 3.62394 21.4877 3.70394 23.5997 5.83194C25.7277 7.94394 25.8077 11.3039 23.7917 13.3199Z"
              fill="#DFCECE"
            />
            <path
              d="M31.1097 11.1759C30.1977 9.27194 28.5177 9.31994 27.7337 7.43194C27.4297 6.71194 27.4937 6.23194 27.4937 6.03994C27.5097 4.93594 28.2937 4.03994 29.2537 4.03994C29.8297 4.03994 30.3417 4.35994 30.6457 4.85594C30.8537 5.17594 30.9817 5.55994 30.9977 5.95994C31.1417 5.79994 31.3017 5.60794 31.4457 5.43194C31.3977 5.23994 31.3017 5.04794 31.1897 4.85594C30.7897 4.21594 30.0697 3.76794 29.2537 3.76794C28.0057 3.76794 26.9657 4.79194 26.9657 6.03994C26.9497 6.80794 27.1257 7.39994 27.3017 7.76794C28.2137 9.67194 29.9097 9.63994 30.6777 11.5119C30.9817 12.2319 30.9177 12.7279 30.9177 12.9039C30.9017 14.0079 30.1177 14.9199 29.1577 14.9199C28.5817 14.9199 28.0697 14.5839 27.7657 14.0879C27.5577 13.7679 27.4297 13.3999 27.4137 12.9839C27.2697 13.1599 27.1097 13.3359 26.9657 13.5119C27.0137 13.7199 27.1097 13.9119 27.2057 14.0879C27.6217 14.7439 28.3417 15.1759 29.1577 15.1759C30.4057 15.1759 31.4457 14.1519 31.4457 12.9039C31.4617 12.1519 31.2857 11.5439 31.1097 11.1759Z"
              fill="#DFCECE"
            />
            <path
              d="M33.5943 14.7439V8.29594H35.5783C35.6423 8.21594 35.7063 8.11994 35.7703 8.02394H33.5943V4.21594H36.0743C36.1543 4.11994 36.2343 4.02394 36.3143 3.94394H33.0663V15.0159H36.3143C36.2343 14.9199 36.1543 14.8239 36.0743 14.7439H33.5943Z"
              fill="#DFCECE"
            />
          </g>
          <line
            id="b-line"
            x1="0.375"
            y1="18.625"
            x2="29.625"
            y2="18.625"
            stroke="#DFCECE"
            stroke-width="0.75"
            stroke-linecap="round"
          />
          <line
            id="t-line"
            x1="7.375"
            y1="0.625"
            x2="36.625"
            y2="0.625"
            stroke="#DFCECE"
            stroke-width="0.75"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </div>

    <Transition name="nav" mode="out-in">
      <nav class="main-nav" :class="{ 'mobile-nav': mobileMenu }" v-if="menuOpen">
        <ul class="flow">
          <li v-for="page in pages" :key="page">
            <NavLink :link="page" @link-clicked="handleClick" />
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
<script setup>
  import LogoComp from './elements/LogoComp.vue'
  import NavLink from './NavLink.vue'
  import { onUnmounted, onMounted, ref } from 'vue'

  const props = defineProps({
    pages: Object,
    mobileMenu: Boolean,
  })
  const emit = defineEmits(['changePage'])

  const medBreakPoint = 980
  const mobileMenu = ref(true)
  const menuOpen = ref(false)

  const handleClick = link => {
    if (window.innerWidth < medBreakPoint) {
      menuOpen.value = false
    }
    emit('changePage', link)
  }

  function update() {
    if (window.innerWidth > medBreakPoint) {
      mobileMenu.value = false
      menuOpen.value = true
    } else {
      mobileMenu.value = true
      // menuOpen.value = true
    }
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update)
  })
  onUnmounted(() => window.removeEventListener('resize', update))
</script>
