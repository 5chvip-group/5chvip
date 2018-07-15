<template>
  <section>
    <h1 class="header">{{ $store.getters.getThreadById($route.params.threadId).title }}</h1>
    めざせ1000レス
    <ul>
      <li v-for="response in responses">{{ response.body }}</li>
      <ResForm :threadId="$route.params.threadId"></ResForm>
    </ul>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { Getter, State } from "vuex-class"
import ResForm from '~/components/ResForm.vue'
import { Response } from "~/entity";
import firebase from '~/plugins/firebase'
import { Firestore } from '~/plugins/firestore'

@Component({
  components: {
    ResForm
  },
  created() {
    this.listen();
  }
})
export default class extends Vue {
  @Getter getThreadById
  responses: Response[]
  async asyncData () {
    // const boardId = this.$route.params.boardId
    // const threadId = this.$route.params.threadId
    const boardId = 'e0VynIX6fezdCiYav6f0'
    const threadId = '4PkfuM9eNNjzER6uNn4z'
    const responses: Response[] = await Firestore.getResponses(boardId, threadId)
    return {responses: responses}
  }
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
  }
}

</script>
