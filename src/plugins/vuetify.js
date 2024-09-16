// Styles
import '@fontsource/roboto-condensed'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/vuetify/index.scss'
import { VBtn } from 'vuetify/components/VBtn'

// Composables
import { createVuetify } from 'vuetify'

const slonBlueprint = {
  aliases: {
    VBtnIcon: VBtn
  },
  defaults: {
    global: {
      rounded: 'md'
    },
    VAvatar: {
      rounded: 'circle'
    },
    VBanner: {
      color: 'primary'
    },
    VBtn: {
      color: 'primary'
    },
    VCard: {
      rounded: 0
    },
    VCheckbox: {
      color: 'secondary'
    },
    VSlider: {
      color: 'primary'
    },
    VTabs: {
      color: 'primary'
    },
    VAutocomplete: {
      VLabel: {
        class: 'text-uppercase'
      },
      VIcon: {
        size: 24
      },
      variant: 'underlined',
      active: true
    },
    VCombobox: {
      VLabel: {
        class: 'text-uppercase'
      },
      VIcon: {
        size: 24
      },
      variant: 'underlined',
      active: true
    },
    VSelect: {
      VTextField: {
        VLabel: {
          class: 'text-uppercase'
        },
        VIcon: {
          size: 24
        }
      },
      variant: 'underlined',
      active: true
    },
    VTextarea: {
      VIcon: {
        size: 24
      },
      VLabel: {
        class: 'text-uppercase'
      },
      variant: 'underlined',
      clearIcon: 'mdi-close',
      active: true
    },
    VTextField: {
      VIcon: {
        size: 24
      },
      VLabel: {
        class: 'text-uppercase'
      },
      variant: 'underlined',
      clearIcon: 'mdi-close',
      active: true
    },
    VFileInput: {
      VLabel: {
        class: 'text-uppercase'
      },
      VIcon: {
        size: 24
      },
      variant: 'underlined',
      active: true
    },
    VList: {
      class: "pa-0",
      rounded: 0
    },

    VToolbar: {
      VBtn: {
        color: null
      }
    },

    VBtnIcon: {
      class: 'slon-default-icon',
      icon: 'icon',
      rounded: 0
    },
    VIcon: {
      class: 'slon-default-icon',
      size: 48
    },
    VChip: {
      class: 'text-lowercase ma-1',
      closeIcon: 'mdi-close',
      label: true,
      rounded: 0
    }
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: slonBlueprint,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#669cc1',
          secondary: '#ffa800',
          accent: '#fb8c00',
          success: '#7cb342',
          info: '#669cc1',
          warning: '#fb8c00',
          error: '#ff6633',
          selected: '#ff5592'
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#669cc1',
          secondary: '#ffa800',
          accent: '#fb8c00',
          success: '#7cb342',
          info: '#669cc1',
          warning: '#fb8c00',
          error: '#ff6633',
          selected: '#ff5592'
        }
      }
    }
  },
  display: {
    mobileBreakpoint: 'md',
  },
})
