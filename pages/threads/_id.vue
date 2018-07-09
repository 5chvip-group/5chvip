<template>
  <section>
    <h1 class="header">{{ thread.title }}</h1>
  </section>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  async asyncData({ req, params }) {
    const json: any = await axios.get('http://localhost:3000/threads.json');
    const threads: any[] = json.data;
    // thread クラスを作って型を利用したい
    const thread: any = threads.find(thread => thread.id == params.id)
    return { thread: thread }
  }
}
</script>
