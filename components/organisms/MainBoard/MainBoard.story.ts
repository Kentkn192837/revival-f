import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { storiesOf } from '@storybook/vue'
import MainBoard from '~/components/organisms/MainBoard/MainBoard.vue'

Vue.use(VueCompositionApi)
Vue.component('main-board', MainBoard)

storiesOf('MainBoard', module).add('default', () => ({
  components: { MainBoard },
  template: '<main-board />'
}))
