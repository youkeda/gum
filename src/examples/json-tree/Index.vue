<template>
  <div>
    <h1>JSONTree</h1>
    <json-tree
      :data="data"
      :schema="schema"
    ></json-tree>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import result from "./data";
import GumTree from "@/components/Tree/Index.vue";

@Component({
  components: {
    GumTree
  }
})
export default class App extends Vue {
  mounted() {}
  private data: any[] = result.results;
  private schema: any[] = result.fields;
}
</script>

<style></style>
