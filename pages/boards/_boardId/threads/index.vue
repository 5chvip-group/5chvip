<template>
  <section>
    <h1 class="header">スレ一覧</h1>
    本家って雑に並びすぎだよねw
    <h2>スレッドいちらん</h2>
    <ul>
      <Thread v-for="thread in threads" :key="thread.id" :thread="thread"></Thread>
    </ul>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import Thread from "~/components/Thread.vue"

@Component({
  components: {
    Thread,
  }
})
export default class extends Vue {
  @State threads
}
</script>
<style lang="scss" scoped>
</style>