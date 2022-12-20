import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowWidth() {
  const medBreakPoint = 980
  const mobileMenu = ref(true)

  if (window.innerWidth > medBreakPoint) {
    mobileMenu.value = false
  }

  function update() {
    if (window.innerWidth > medBreakPoint) {
      mobileMenu.value = false
    } else {
      mobileMenu.value = true
    }
  }

  onMounted(() => window.addEventListener('resize', update))
  onUnmounted(() => window.removeEventListener('resize', update))

  return { medBreakPoint, mobileMenu }
}
