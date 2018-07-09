<template>
  <section>
    <h1 class="header">{{ getBoardById($route.params.boardId).name }}</h1>
    自治がうんたらとか
    <router-link :to="{ name: 'boards-boardId-threads'}">スレッド一覧</router-link>
  </section>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from "nuxt-property-decorator"

import {
  Getter,
} from "vuex-class"

@Component({})
export default class extends Vue {
  @Getter getBoardById
}
</script>
<style lang="scss" scoped>
</style>
