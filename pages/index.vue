<template>
  <section>
    <h1 class="header">5chコピー作ろう！</h1>
    <a href="boards"><img src="top_tsubo.png" alt="トップのツボ"></a>
    画像クリックで板一覧へ
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"

@Component({
  components: {
  }
})
export default class extends Vue {
  @State people
}
</script>
<style lang="scss" scoped>
// scssテスト
$size: 200%;
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  font-size: $size;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
