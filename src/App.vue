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
    "zhoufan",
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
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
