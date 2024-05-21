import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Vuetify from '@/plugins/vuetify'
import TestButton from '@/components/TestButton.vue'

describe('TestButton', () => {
  it('renders properly', () => {
    const wrapper = mount(TestButton, {
      global: {
        plugins: [Vuetify]
      },
      props: { label: 'Vuetify Button' }
    })
    expect(wrapper.text()).toContain('Vuetify Button')
  })
})
