<template>
  <div>
    <h1>JSONTree</h1>
    <div class="example">
      <json-tree
        :data="data"
        :parser="undefined"
      ></json-tree>
    </div>

    <button @click="changeData">切换数据</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import result from "./data";
import result2 from "./data2";

import GumTree from "@/components/Tree/Index.vue";
import mysqlParser from "@/components/JSONTree/parser/mysql";
import { EJSON } from "bson";
@Component({
  components: {
    GumTree
  }
})
export default class App extends Vue {
  // private data: any[] = EJSON.parse(JSON.stringify(result.results));
  private data: any = EJSON.parse(EJSON.stringify(result.results), {
    relaxed: false
  });
  // private data: any = result.results;
  private schema: any[] = result.fields;

  mounted() {
    console.log(this.data);
  }

  parser(key: string) {
    return mysqlParser(key, this.schema);
  }

  changeData() {
    this.data = [];
    this.schema = [];
    this.$forceUpdate();
    this.$nextTick(() => {
      this.data = result2.results;
      this.schema = result2.fields;
      console.log(this.data, this.schema);
    });
  }
}
</script>

<style lang="scss">
.example {
  height: 500px;
}
</style>
