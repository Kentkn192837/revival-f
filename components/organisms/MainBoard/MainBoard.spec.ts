import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import MainBoard from '~/components/organisms/MainBoard/MainBoard.vue'
Vue.use(VueCompositionApi)

describe('MainBoard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MainBoard, {
      propsData: {
        text: 'Testing the composition API',
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
