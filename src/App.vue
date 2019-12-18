<template>
  <div id="app">
    <Gum></Gum>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Gum from "./components/Editor.vue";

@Component({
  components: {
    Gum
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
