import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import TestComponent from '~/components/atoms/TestComponent/TestComponent.vue'
Vue.use(VueCompositionApi)

describe('TestComponent', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        text: 'Testing the composition API',
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
