<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="title">レスを投稿する</div>
    <div>
      <input type="text" v-model="response.author" name="author" size="70" placeholder="名前(省略可)">
    </div>
    <div>
      <input type="email" v-model="response.email" size="70" placeholder="メールアドレス(省略可)">
    </div>
    <div>
      <textarea cols="70" rows="5" v-model="response.body" placeholder="コメント内容"></textarea>
    </div>
    <button type="submit">書き込む</button>
  </form>
</template>
<script lang="ts">
import { 
  Vue,
  Component,
  Prop
} from "nuxt-property-decorator"
import { Action } from "vuex-class"
import { Response } from '~/entity'

@Component({})
export default class ResForm extends Vue {
  response: Response = new Response()

  @Prop() threadId

  onSubmit() {
    this.response.threadId = this.threadId
    // 書き込み
  }
}
</script>
<style lang="scss" scoped>
</style>
