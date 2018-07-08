<template>
  <section>
    <h1 class="header">{{ title }}</h1>
  </section>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  async asyncData({ req, params }) {
    return axios
      .get('http://localhost:3000/threads.json')
      .then(json => json.data.find(thread => thread.id == params.id));
  }
}
</script>
