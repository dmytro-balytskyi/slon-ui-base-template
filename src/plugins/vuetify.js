// Styles
import '@fontsource/roboto-condensed'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/vuetify/index.scss'

// Composables
import { createVuetify } from 'vuetify'

// Components
import { VBtn } from 'vuetify/components/VBtn'
import { ru, uk } from 'vuetify/locale'

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
    VTab: {
      VIcon: {
        size: 32
      }
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
      class: 'pa-0',
      rounded: 0
    },
    VToolbar: {
      VBtn: {
        color: null
      }
    },
    VTooltip: {
      'open-delay': 3000
    },
    VBtnIcon: {
      icon: 'icon',
      rounded: 0,
      VIcon: {
        size: 48
      }
    },
    VChip: {
      class: 'text-lowercase ma-1',
      closeIcon: 'mdi-close',
      label: true,
      rounded: 0
    },
    VRating: {
      activeColor: 'secondary',
      color: 'grey-darken-1',
      density: 'comfortable',
      VIcon: {
        class: ''
      }
    },
    VCheckbox: {
      color: 'success',
      density: 'comfortable',
      hideDetails: true,
      VIcon: {
        class: ''
      }
    },
    VSwitch: {
      color: 'success',
      density: 'comfortable',
      hideDetails: true
    },
    VRadio: {
      color: 'success',
      density: 'comfortable',
      hideDetails: true,
      VIcon: {
        class: ''
      }
    },
    VRadioGroup: {
      color: 'success',
      density: 'comfortable',
      hideDetails: true
    },
    VSnackbar: {
      rounded: 0,
      timeout: 4000
    },
    VFab: {
      color: 'primary',
      size: 'large',
      appear: true
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
  locale: {
    locale: 'uk',
    messages: { ru, uk },
  },
})
