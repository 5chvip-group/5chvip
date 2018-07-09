<template>
  <section>
    <h1 class="header">板一覧ページ</h1>
    夜のおかずまでうんたら
    <ul>
      <li v-for="board in boards">
        <router-link :to="{ name: 'boards-boardId', params: { boardId: board.id } }">{{ board.name }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from "nuxt-property-decorator"

import {
  State,
} from "vuex-class"

@Component({})
export default class extends Vue {
  @State boards
}
</script>

<style lang="scss" scoped>
</style>
