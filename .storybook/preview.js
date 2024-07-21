import { setup } from '@storybook/vue3'
import { registerPlugins } from '../src/plugins'
import { withVuetifyTheme } from './withVuetifyThemeDecorator.js'

setup((app) => {
  registerPlugins(app)
})

const preview = {
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  globalTypes: {
    theme: {
      description: 'Dark/Light mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true
      }
    }
  }
}

export default preview
export const decorators = [withVuetifyTheme]
