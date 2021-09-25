import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { storiesOf } from '@storybook/vue'
import TestComponent from '~/components/atoms/TestComponent/TestComponent.vue'

Vue.use(VueCompositionApi)
Vue.component('test-component', TestComponent)

storiesOf('TestComponent', module).add('default', () => ({
  components: { TestComponent },
  template: '<test-component />'
}))
