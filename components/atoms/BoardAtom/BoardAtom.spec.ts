import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import BoardAtom from '~/components/atoms/BoardAtom/BoardAtom.vue'
Vue.use(VueCompositionApi)

describe('BoardAtom', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BoardAtom, {
      propsData: {
        text: 'Testing the composition API',
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
