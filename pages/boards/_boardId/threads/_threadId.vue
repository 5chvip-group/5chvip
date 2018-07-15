<template>
  <section>
    <h1 class="header">{{ thread.title }}</h1>
    めざせ1000レス
    <ul>
      <li v-for="response in responses">{{ response.body }}</li>
      <ResForm :boardId="$route.params.boardId" :threadId="$route.params.threadId"></ResForm>
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
import { Response, Thread } from "~/entity";
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
  thread: Thread
  async asyncData (route) {
    const boardId = route.params.boardId
    const threadId = route.params.threadId
    const thread: Thread = await Firestore.getThread(boardId, threadId)
    const responses: Response[] = await Firestore.getResponses(boardId, threadId)
    return {
      thread: thread,
      responses: responses
    }
  }
  listen () {
    const boardId = this.$route.params.boardId
    const threadId = this.$route.params.threadId

    Firestore.setResponsesRealTime(boardId, threadId, (responses)　=> {
      this.responses = responses
    })
  }
}

</script>
