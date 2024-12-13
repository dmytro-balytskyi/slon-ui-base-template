import { withVuetify } from './withVuetify.js'
import vuetify from '../src/plugins/vuetify.js'
import { DEFAULT_VIEWPORT, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

MINIMAL_VIEWPORTS.responsive = {
  name: 'Responsive',
  styles: {
    width: '100%',
    height: '100%'
  },
  type: 'desktop'
}

const preview = {
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS
      },
      defaultViewport: DEFAULT_VIEWPORT
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
  },
  initialGlobals: {
    vueMdx: {
      beforeVueAppMount(app) {
        app.use(vuetify)
      }
    }
  },
  decorators: [withVuetify]
}

export default preview
