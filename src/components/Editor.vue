<template>
  <div class="gum" ref="editor"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as monaco from 'monaco-editor';

@Component({
  components: {
  }
})
export default class App extends Vue {
  editor!: monaco.editor.IStandaloneCodeEditor;
  $refs!: {
    editor: HTMLElement;
  };

  mounted() {
    this.editor = monaco.editor.create(this.$refs.editor, {
      value: "123",
      automaticLayout:true,
      language:"html"
    });
  }
}
</script>

<style>
.gum {
  width: 100%;
  height: 100%;
}
</style>
