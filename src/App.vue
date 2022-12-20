<template>
  <div class="container">
    <NavigationComp :pages="pages" @change-page="handleChange" />
    <main class="content grid">
      <section class="content-info flex-column" ref="contentBox">
        <Transition name="page" mode="out-in">
          <component :is="infoSide[currentView]"></component>
        </Transition>
        <div class="content-info__lower">
          <CounterElement :currentView="currentView" />
        </div>
      </section>
      <section class="content-image">
        <Transition name="page" mode="out-in">
          <component :is="imgSide[currentView]"></component>
        </Transition>
      </section>
    </main>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  import MainComp from './components/MainComp.vue'
  import AboutComp from './components/AboutComp.vue'
  import ProjectsComp from './components/ProjectsComp.vue'
  import ContactComp from './components/ContactComp.vue'
  import { asyncImg } from './composables/asyncImage'

  import NavigationComp from './components/NavigationComp.vue'

  import CounterElement from './components/elements/CounterElement.vue'

  // const MainComp = () => import('./components/MainComp.vue')

  const pages = ['about', 'projects', 'contact']

  const currentView = ref('main')

  const handleChange = page => {
    currentView.value = page
  }

  const infoSide = {
    main: MainComp,
    about: AboutComp,
    projects: ProjectsComp,
    contact: ContactComp,
  }
  const imgSide = {
    main: asyncImg('Main'),
    about: asyncImg('About'),
    projects: asyncImg('Projects'),
    contact: asyncImg('Contact'),
  }
</script>
<style scoped></style>
