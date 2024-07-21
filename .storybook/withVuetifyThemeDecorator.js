import { useTheme } from 'vuetify'
import StoryWrapper from './StoryWrapper.vue'

export const DEFAULT_THEME = 'light'

export const withVuetifyTheme = (story, context) => { 
  const globalTheme = context.globals.theme || DEFAULT_THEME
  
  return {
    components: { StoryWrapper, story },
    setup() {
      const theme = useTheme()
      theme.global.name.value = globalTheme

      return {
        theme: theme.global.name
      }
    },
    template: `
      <StoryWrapper :theme="theme">
        <story />
      </StoryWrapper>
    `
  }
}
