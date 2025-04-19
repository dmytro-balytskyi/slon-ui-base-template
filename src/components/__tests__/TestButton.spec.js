import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Vuetify from '@/plugins/vuetify'
import TestButton from '@/components/TestButton.vue'

global.ResizeObserver = require('resize-observer-polyfill')

describe('TestButton', () => {
  it('renders properly', () => {
    const wrapper = mount(TestButton, {
      props: {},
      global: {
        components: {
          TestButton
        },
        props: { label: 'Vuetify Button' },
        plugins: [Vuetify]
      }
    })

    expect(wrapper.text()).toContain('Button')
  })
})
