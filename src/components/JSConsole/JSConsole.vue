<template>
  <div class="js-console">
    <div
      v-for="(line, index) in data"
      :key="`line-${index}`"
      class="Line"
    >
      <component
        :is="whichType(line)"
        :value="line"
      ></component>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import which from "./components/whichType";
@Component({
  components: {}
})
export default class JSConsole extends Vue {
  @Prop({ default: () => [] }) data!: any[];

  whichType(value: any) {
    return which(value);
  }
}
</script>
<style lang="scss">
@import "./components/types.scss";
.Line {
  line-height: 20px;
  border-bottom: 1px solid #313233;
  position: relative;
  white-space: pre-wrap;
  overflow-x: auto;
  background-color: #202122;
  color: #b4bcc0;
  padding: 0 20px;
}

.Line.out:before {
  content: "";
  display: block;
  position: absolute;
  width: 2px;
  height: calc(100% - 2rem);
  background: blue;
  left: 0.5rem;
}

.Line em {
  user-select: none;
  padding-right: 5px;
  cursor: pointer;
  color: #8a73ff;
}

.Line .jc-error em,
.Line .jc-error .bareString {
  color: #f44336;
}

.Line .sep {
  padding-right: 1ch;
}

.Line .jc-type em:hover {
  text-decoration: underline;
}

.ArrayType.closed {
  cursor: pointer;
}

.Line .jc-type.closed * em:hover {
  text-decoration: none;
}

.ArrayType.closed > div {
  display: inline-block;
}

.jc-group {
  margin-left: 20px;
  /*margin-top: 0.5rem;*/
}

.jc-key-value {
  line-height: 20px;
  white-space: nowrap;
  display: flex;
}

.closed .jc-key-value {
  display: inline;
}

.index {
  user-select: none;
  vertical-align: text-bottom;
}

.key,
.index {
  line-height: 1.2rem;
  color: #d3d4d5;
  margin-right: 0.5rem;
}

.arb-info {
  color: #d3d4d5;
}

.Line > .output > .type {
  overflow-x: auto;
}
</style>