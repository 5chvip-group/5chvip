<template>
  <li>
    <router-link :to="{ name: 'boards-boardId-threads-threadId', params: { threadId: thread.id } }">{{ thread.title }}</router-link>
  </li>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Thread extends Vue {
  @Prop() thread
}
</script>
<style lang="scss" scoped>
.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>
