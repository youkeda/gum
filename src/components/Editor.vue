<template>
  <div class="gum" ref="editor"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as monaco from "monaco-editor";

// // @ts-ignore
// self.MonacoEnvironment = {
//   getWorkerUrl: function(moduleId: string, label: string) {
//     if (label === "json") {
//       return "./json.worker.bundle.js";
//     }
//     if (label === "css") {
//       return "./css.worker.bundle.js";
//     }
//     if (label === "html") {
//       return "./html.worker.bundle.js";
//     }
//     if (label === "typescript" || label === "javascript") {
//       return "./ts.worker.bundle.js";
//     }
//     return "./editor.worker.bundle.js";
//   }
// };

@Component({
  components: {}
})
export default class GumEditor extends Vue {
  editor!: monaco.editor.IStandaloneCodeEditor;
  $refs!: {
    editor: HTMLElement;
  };

  mounted() {
    this.editor = monaco.editor.create(this.$refs.editor, {
      value: "//123",
      automaticLayout: true,
      language: "java"
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
