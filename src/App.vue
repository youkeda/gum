<template>
  <div id="app">
    <!-- <GumEditor></GumEditor> -->
    <JSConsole :data="data"></JSConsole>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./components/Editor";
import JSConsole from "./components/JSConsole/JSConsole.vue";

@Component({
  components: {
    JSConsole
  }
})
export default class App extends Vue {
  private data = [
    // undefined,
    // null,
    // "zhoufan",
    // [
    //   "1",
    //   "1",
    //   undefined,
    //   {
    //     abc: "123123123",
    //     ccc: 111,
    //     zhoufan: [
    //       "1",
    //       "1",
    //       undefined,
    //       123,
    //       "1",
    //       "1",
    //       "1",
    //       "1",
    //       "1",
    //       "1",
    //       "1",
    //       "1",
    //       "1"
    //     ],
    //     ddd: "123123123",
    //     eee: 111,
    //     fff: "123123123",
    //     ggg: 111
    //   },
    //   123,
    //   "1",
    //   "1",
    //   "1",
    //   "1",
    //   "1",
    //   "1",
    //   "1",
    //   "1",
    //   "1"
    // ],
    // {
    //   abc: "123123123",
    //   ccc: 111,
    //   zhoufan: [
    //     "1",
    //     "1",
    //     undefined,
    //     123,
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1"
    //   ],
    //   ddd: "123123123",
    //   eee: 111,
    //   fff: "123123123",
    //   ggg: 111
    // },
    document
  ];
}
</script>

<style>
*,
body {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
