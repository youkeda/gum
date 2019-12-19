<template>
  <div id="app">
    <GumEditor></GumEditor>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {GumEditor} from "./index";

@Component({
  components: {
    GumEditor
  }
})
export default class App extends Vue {}
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
