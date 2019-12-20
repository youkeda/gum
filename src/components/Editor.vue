<template>
  <div class="gum" ref="editor"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { editor } from "monaco-editor/esm/vs/editor/editor.api";


@Component({
  components: {}
})
export default class GumEditor extends Vue {
  win: any;
  editor!: editor.IStandaloneCodeEditor;
  $refs!: {
    editor: HTMLElement;
  };

  mounted() {
    this.win = window;

    setTimeout(() => {
      this.win.require(["vs/editor/editor.main"], () => {
        const monaco: any = this.win.monaco;
        this.editor = monaco.editor.create(this.$refs.editor, {
          value: "//123",
          automaticLayout: true,
          language: "java"
        });
      });
    }, 0);
  }

  loadEditor() {}
}
</script>

<style>
.gum {
  width: 100%;
  height: 100%;
}
</style>
