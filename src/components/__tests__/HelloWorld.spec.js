import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HelloWorld, { props: { msg: 'Hello world' } })
    expect(wrapper.text()).toContain('Hello world')
  })
})
