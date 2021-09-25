<template>
  <main-board />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MainBoard from '~/components/organisms/MainBoard/MainBoard.vue'

export default defineComponent({
  components: { MainBoard }
})
</script>

<style lang="scss" scoped>
</style>
