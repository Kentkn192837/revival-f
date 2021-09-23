---
to: '<%= spec? `components/${category}/${name}/${name}.spec.ts` : null %>'
---
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import <%= name %> from '~/components/<%= category %>/<%= name %>/<%= name %>.vue'
Vue.use(VueCompositionApi)

describe('<%= name %>', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(<%= name %>, {
      propsData: {
        text: 'Testing the composition API',
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
