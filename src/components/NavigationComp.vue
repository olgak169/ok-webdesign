<template>
  <header class="container-header flex">
    <LogoComp @logo-clicked="handleClick" />
    <div class="nav-btns" v-if="mobileMenu">
      <button class="menu-open" v-show="!menuOpen" @click="menuOpen = true">menu</button>
      <button class="menu-close" v-show="menuOpen" @click="menuOpen = false">
        close
      </button>
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
      menuOpen.value = true
    }
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update)
  })
  onUnmounted(() => window.removeEventListener('resize', update))
</script>
<style scoped></style>
