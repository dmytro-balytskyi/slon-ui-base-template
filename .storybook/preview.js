import { setup } from '@storybook/vue3'
import vuetify from '../src/plugins/vuetify'
import { withVuetifyTheme } from './withVeutifyThemeDecorator.js'

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff'
        },
        {
          name: 'dark',
          value: '#000'
        }
      ]
    },
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true
      }
    }
  }
}

setup((app) => {
  app.use(vuetify)
})

export const decorators = [withVuetifyTheme]
export default preview
