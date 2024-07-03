import { ref, onMounted, onUnmounted } from 'vue'
import { useLayout } from 'vuetify'

export function useAvailableHeight() {
  const availableHeight = ref(0)
  const { getLayoutItem } = useLayout()

  const calculateAvailableHeight = () => {
    const headerHeight = getLayoutItem('app-bar')?.size ?? 0
    const footerHeight = getLayoutItem('footer')?.size ?? 0

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
