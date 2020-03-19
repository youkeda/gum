<template>
  <div class="json-tree">
    <jt-wrapper class="json-tree-header" value="value">
      <div slot="key">key</div>
      <div class="value" slot="value">value</div>
      <div class="type" slot="type">type</div>
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
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import which from './components/whichType';
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
<style lang="scss" scoped>
.json-tree {
  width: 100%;

  .json-tree-header {
    .value,
    .type {
      position: relative;
      &:before {
        content: '';
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
