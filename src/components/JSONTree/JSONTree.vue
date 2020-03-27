<template>
  <div class="json-tree">
    <jt-wrapper
      class="json-tree-header"
      value="value"
      valueClass="header-value"
      typeClass="header-type"
    >
      <div slot="key">key</div>
      <div slot="value"><i @mousedown="onHeaderDrag"></i>value</div>
      <div slot="type">type</div>
    </jt-wrapper>
    <div class="json-tree-content">
      <component
        v-for="(match, index) in matchs"
        :key="`line-${index}`"
        :is="match.type"
        :innerType="match.innerType"
        :value="match.value"
        :depth="0"
      ></component>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, Provide } from 'vue-property-decorator';
import which from './components/whichType';
import { ParserFunc } from './parser';
import Match from './model/match';
const DEFAULT_KEY_WIDTH = 300;
@Component({
  components: {}
})
export default class JSONTree extends Vue {
  @Prop({ default: () => [] }) data!: any[];
  @Prop({ default: () => undefined }) parser?: ParserFunc;
  @Provide('jtParser') jtParser?: ParserFunc = this.parser;

  private oWidth: any = {
    key: DEFAULT_KEY_WIDTH
  };
  @Provide('jtWidth') jtWidth: any = this.oWidth;

  private matchs: Match[] = [];
  private isDragHeader = false;
  mounted() {
    this.initMatch();
  }

  @Watch('data')
  onDataChange() {
    this.initMatch();
  }

  initMatch() {
    this.matchs = [];
    this.data.map((item, index) => {
      this.matchs.push({
        ...which(undefined, item, this.jtParser),
        key: index,
        value: item
      });
    });

    // setTimeout(() => {
    //   this.oWidth.key = 600;
    //   console.log('200');
    //   this.$forceUpdate();
    // }, 2000);
  }

  onHeaderDrag(e: any) {
    e = e || window.event;
    const start: number = e.pageX || e.clientX;
    let originWidth: number = this.oWidth.key;
    this.isDragHeader = true;
    document.body.onmousemove = (e: any) => {
      if (!this.isDragHeader) {
        return;
      }
      e = e || window.event;
      const delta = start - (e.pageX || e.clientX);
      this.oWidth.key = originWidth - delta;
    };
    document.body.onmouseup = () => {
      this.isDragHeader = false;
    };
  }
}
</script>

<style lang="scss">
.json-tree {
  .line {
    .header-value {
      position: relative;
      border-left: 1px dashed #3d3f4f !important;

      i {
        position: absolute;
        left: -1px;
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
  position: relative;
  height: 100%;

  .json-tree-header {
    background-color: #434554;
  }

  .json-tree-content {
    height: calc(100% - 26px);
    overflow-y: scroll;
  }
}
</style>
