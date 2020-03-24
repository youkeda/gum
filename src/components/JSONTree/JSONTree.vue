<template>
  <div class="json-tree">
    <jt-wrapper
      class="json-tree-header"
      value="value"
      valueClass="header-value"
      typeClass="header-type"
    >
      <div slot="key">key</div>
      <div slot="value">value</div>
      <div slot="type">type</div>
    </jt-wrapper>
    <component
      v-for="(line, index) in data"
      :key="`line-${index}`"
      :is="whichType(line)"
      :value="line"
      :depth="0"
    ></component>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import which from "./components/whichType";
@Component({
  components: {}
})
export default class JSONTree extends Vue {
  @Prop({ default: () => [] }) data!: any[];

  whichType(value: any) {
    return which(value);
  }
}
</script>

<style lang="scss" >
.json-tree {
  .line {
    .header-value,
    .header-type {
      position: relative;
      border-left: 1px dashed #3d3f4f !important;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 2px;
        display: block;
        height: 100%;
        background-color: transparent;
        cursor: ew-resize;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.json-tree {
  width: 100%;

  .json-tree-header {
    background-color: #434554;
  }
}
</style>
