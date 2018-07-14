<template>
  <section>
    <h1 class="header">{{ $store.getters.getThreadById($route.params.threadId).title }}</h1>
    めざせ1000レス
    <ul>
      <li v-for="response in responses">{{ response.body }}</li>
    </ul>
    <input v-model="body" placeholder="内容">
    <button v-on:click="send">書き込む</button>
  </section>
</template>

<script lang="ts">

import { Response } from "~/entity";
import firebase from '~/plugins/firebase'


export default {
  data () {
    return {
      responses: [],
      body: null
    }
  },
  created () {
    this.listen();
  },
  methods: {
    listen () {
      // const boardId = this.$route.params.boardId
      // const threadId = this.$route.params.threadId
      const boardId = 'e0VynIX6fezdCiYav6f0'
      const threadId = '4PkfuM9eNNjzER6uNn4z'
      const query = firebase.firestore().collection('boards').doc(boardId).collection('threads').doc(threadId).collection('responses').orderBy('createAt')
      query.onSnapshot(querySnapshot => {
        const responses: Response[] = []
        querySnapshot.forEach(doc => {
          responses.push(doc.data() as Response)
        });
        this.responses = responses
      })
    },
    send () {
      if (this.body == null) {return}
      const boardId = 'e0VynIX6fezdCiYav6f0'
      const threadId = '4PkfuM9eNNjzER6uNn4z'
      const query = firebase.firestore().collection('boards').doc(boardId).collection('threads').doc(threadId).collection('responses')
      query.add({
        author: "ななしさん",
        email: "noname@example.com",
        body: this.body,
        createAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      this.body = null
    }
  }
}
</script>
