<template>
  <div>
    <h1>JSONTree</h1>
    <div class="example">
      <json-tree :data="data"></json-tree>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import result from './data';
import GumTree from '@/components/Tree/Index.vue';
import mysqlParser from '@/components/JSONTree/parser/mysql';

@Component({
  components: {
    GumTree
  }
})
export default class App extends Vue {
  mounted() {}
  private data: any[] = result.results;
  private schema: any[] = result.fields;

  parser(key: string) {
    return mysqlParser(key, this.schema);
  }
}
</script>

<style lang="scss">
.example {
  height: 500px;
}
</style>
