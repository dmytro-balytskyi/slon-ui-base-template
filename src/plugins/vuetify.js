// Styles
import '@fontsource-variable/roboto-condensed'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#669cc1',
          secondary: '#febb15',
          accent: '#fb8c00',
          success: '#4caf50',
          info: '#2196f3',
          warning: '#fb8c00',
          error: '#b71c1c',
          background: '#ffffff',
          surface: '#ffffff'
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#669cc1',
          secondary: '#febb15',
          accent: '#fb8c00',
          success: '#4caf50',
          info: '#2196f3',
          warning: '#fb8c00',
          error: '#b71c1c'
        }
      }
    }
  }
})
