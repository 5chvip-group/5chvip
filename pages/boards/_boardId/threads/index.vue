<template>
  <section>
    <h1 class="header">スレ一覧</h1>
    本家って雑に並びすぎだよねw
    <h2>スレッドいちらん</h2>
    <ul>
      <Thread v-for="thread in getThreadsByBoardId($route.params.boardId)" :key="thread.id" :thread="thread"></Thread>
    </ul>
    <ThreadForm :boardId="$route.params.boardId"></ThreadForm>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { Getter } from "vuex-class"
import Thread from "~/components/Thread.vue"
import ThreadForm from '~/components/ThreadForm.vue'

@Component({
  components: {
    Thread,
    ThreadForm
  }
})
export default class extends Vue {
  @Getter getThreadsByBoardId
}
</script>
<style lang="scss" scoped>
</style>
