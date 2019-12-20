<template>
  <div class="level g-editor-container">
    <div class="level-left g-editor-workspace">
      <div class="level">
        <div class="level-left sidebar">
          <a
            href="javascript:;"
            class="btn"
            :class="getActionBtnStatus('project')"
            @click="onActionBtnClick('project')"
          >
            <img src="@/assets/icon/files.svg" alt />
          </a>
        </div>
        <div class="level-item"></div>
      </div>
    </div>
    <div class="level-item" ref="editor"></div>
    <div class="level-right g-editor-sidebar">
      <span class="g-editor-sidebar-action">1.Web Browser</span>
      <span class="g-editor-sidebar-action" style="margin:15px -5px;">2.Git</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { editor } from "monaco-editor/esm/vs/editor/editor.api";

@Component({
  components: {}
})
export default class GumEditor extends Vue {
  private win: any;
  editor!: editor.IStandaloneCodeEditor;

  actionBtnStatus: any = {
    project: "active"
  };

  $refs!: {
    editor: HTMLElement;
  };

  mounted() {
    // @ts-ignore
    window.require(["vs/editor/editor.main"], () => {
      // @ts-ignore
      this.editor = monaco.editor.create(this.$refs.editor, {
        value: "",
        automaticLayout: true,
        language: "java"
      });
    });
  }

  getActionBtnStatus(item: string) {
    return this.actionBtnStatus[item];
  }

  onActionBtnClick(item: string) {
    this.actionBtnStatus[item] = this.actionBtnStatus[item] ? "" : "active";
    console.log(this.actionBtnStatus);
  }
}
</script>

<style lang="scss" scoped>
.g-editor-container {
  width: 100%;
  height: 100%;
  min-width: 600px;
  color: #fcfcfa;
  user-select: none;
  div {
    height: 100%;
  }
  .btn {
    opacity: 0.7;
    img {
      width: 24px;
      height: 24px;
    }
  }
  .btn:hover,
  .active {
    opacity: 1;
  }

  .g-editor-workspace {
    width: 200px;

    background-color: #263238;
    .sidebar {
      flex-direction: column;
      align-items: center;
      width: 40px;
      justify-content: flex-start;
      padding-top: 8px;
    }
  }
  .g-editor-sidebar {
    width: 20px;
    background-color: #000;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    .g-editor-sidebar-action {
      cursor: pointer;
      margin: 40px -35px;
      font-size: 14px;
      opacity: 0.6;
      transform: rotate(90deg);
    }
    .g-editor-sidebar-action:hover {
      opacity: 1;
    }
  }
}
</style> 
