---
to: '<%= story? `components/${category}/${name}/${name}.story.ts` : null %>'
---
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { storiesOf } from '@storybook/vue'
import <%= name %> from '~/components/<%= category %>/<%= name %>/<%= name %>.vue'

Vue.use(VueCompositionApi)
Vue.component('<%= h.changeCase.param(name) %>', <%= name %>)

storiesOf('<%= name %>', module).add('default', () => ({
  components: { <%= name %> },
  template: '<<%= h.changeCase.param(name) %> />'
}))
