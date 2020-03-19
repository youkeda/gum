<template>
  <div style="width:300px">
    <GumTree :data="data"></GumTree>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import GumTree from "@/components/Tree/Index.vue";

@Component({
  components: {
    GumTree
  }
})
export default class App extends Vue {
  mounted() {}
  private data = [
    {
      id: "1",
      title: "1",
      expanded: true,
      children: [
        {
          id: "1-1",
          expanded: true,
          title: "1-1"
        },
        {
          id: "1-2",
          title: "1-2",
          children: [
            {
              id: "1-2-1",
              title: "1-2-1"
            }
          ]
        },
        {
          id: "1-3",
          title: "1-3",
          expanded: true,
          children: [
            {
              id: "1-3-1",
              title: "1-3-1"
            }
          ]
        }
      ]
    }
  ];
}
</script>

<style></style>
