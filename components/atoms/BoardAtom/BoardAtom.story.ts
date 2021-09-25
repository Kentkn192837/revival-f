import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { storiesOf } from '@storybook/vue'
import BoardAtom from '~/components/atoms/BoardAtom/BoardAtom.vue'

Vue.use(VueCompositionApi)
Vue.component('board-atom', BoardAtom)

storiesOf('BoardAtom', module).add('default', () => ({
  components: { BoardAtom },
  template: '<board-atom />'
}))
