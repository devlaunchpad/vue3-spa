import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Container from '../src/components/Container.vue'

describe('component Container.vue', () => {
  it('should render correctly', () => {
    const wrapper = mount(Container)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
