<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="title">スレッド作成</div>
    <div>
      <input type="text" v-model="thread.title" name="title" placeholder="スレッドタイトル">
    </div>
    <button type="submit">新規スレッド作成</button>
  </form>
</template>
<script lang="ts">
import { 
  Vue,
  Component,
  Prop
} from "nuxt-property-decorator"
import { Thread } from '~/entity'

@Component({})
export default class ThreadForm extends Vue {
  thread: Thread = new Thread()
  @Prop() boardId

  onSubmit() {
    this.thread.boardId = this.boardId
     // 書き込み
  }
}
</script>
<style lang="scss" scoped>
</style>
