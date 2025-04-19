// Styles
import '@fontsource/roboto-condensed'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@slonbeton/slon-ui-blueprint-styles/src/styles/global.scss'

// Composables
import { createVuetify } from 'vuetify'

// Components
import { ru, uk } from 'vuetify/locale'
import { VBtn } from 'vuetify/components'

import { blueprint, themes } from '@slonbeton/slon-ui-blueprint-styles'

blueprint.aliases = {
  VBtnIcon: VBtn,
  SBtn: VBtn,
  FBtn: VBtn
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint,
  theme: {
    defaultTheme: 'light',
    themes
  },
  display: {
    mobileBreakpoint: 'md',
  },
  locale: {
    locale: 'uk',
    messages: { ru, uk },
  },
})
