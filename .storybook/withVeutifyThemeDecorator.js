import { useTheme } from 'vuetify'
import VuetifyWrapper from './VuetifyWrapper.vue'

export const DEFAULT_THEME = 'light'

export const withVuetifyTheme = (story, context) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME

  return {
    components: { VuetifyWrapper, story },
    setup() {
      const theme = useTheme()

      theme.global.name.value = globalTheme

      console.log(theme)

      return {
        theme: theme.global.name
      }
    },
    template: `
      <VuetifyWrapper :theme="theme">
          <story />
      </VuetifyWrapper>
    `
  }
}
