import { ref, onMounted, onUnmounted } from 'vue'
import { useLayout } from 'vuetify'

export function useAvailableHeight() {
  const availableHeight = ref(0)
  const layout = useLayout()

  const calculateAvailableHeight = () => {
    const headerHeight = layout.main?.getRect().top || 0
    const footerHeight = layout.footer?.getRect().height || 0
    availableHeight.value = window.innerHeight - headerHeight - footerHeight
  }

  onMounted(() => {
    calculateAvailableHeight()
    window.addEventListener('resize', calculateAvailableHeight)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', calculateAvailableHeight)
  })

  return {
    availableHeight
  }
}
