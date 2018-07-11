<template>
  <section>
    <h1 class="header">{{ getThreadById($route.params.threadId).title }}</h1>
    めざせ1000レス
    <ul>
      <li v-for="response in getResponsesByThreadId($route.params.threadId)">{{ response.body }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { Getter, State } from "vuex-class"

@Component({})
export default class extends Vue {
  @Getter getThreadById
  @Getter getResponsesByThreadId
}
</script>
