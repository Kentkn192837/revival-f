<template>
  <board-atom />
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext,
  onMounted
} from '@vue/composition-api'
import BoardAtom from '~/components/atoms/BoardAtom/BoardAtom.vue'

type Props = { text: string }
type State = { text: string }

export default defineComponent({
  name: 'MainBoard',
  components: { BoardAtom },
  props: {
    text: { type: String, default: 'sample props' }
  },
  setup(props: Props, context: SetupContext) {
    const state = reactive<State>({
      text: 'sample state'
    })

    const emit = () => {
      context.emit('emit-sample', props.text)
    }

    onMounted(() => {})

    return {
      state,
      props,
      emit
    }
  }
})
</script>
<style lang="scss" scoped>
// .main-board {
// }
</style>
