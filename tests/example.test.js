import { mount } from '@vue/test-utils'
import Example from './ExampleTest.vue'

test('fuck', async () => {
  const wrapper = mount(Example)
  expect(wrapper.vm.msg).toBe('Hello Vue test utils')
  await wrapper.setData({
    msg: 'Hello Mother Fucker!'
  })
  expect(wrapper.vm.msg).toBe('Hello Mother Fucker!')
  expect(wrapper.find('div').text()).toBe('Hello Mother Fucker!')
})