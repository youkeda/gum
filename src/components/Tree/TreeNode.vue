<template>
  <div class="gum-tree__node">
    <li class="gum-tree__node-content">
      <div class="gum-tree__node__title" :class="selected">
        <span class="gum-tree__node-icon"></span>
        <span @click="onSelect(item)"> {{ item.title }}</span>
      </div>
      <span
        class="gum-tree__node-checkbox "
        @click="onCheck(item)"
        :class="checked"
      >
        <img v-if="item.checked" width="10" src="./assets/checked.png" alt="" />
      </span>
    </li>
    <template v-if="item.expanded && item.children && item.children.length > 0">
      <GumTreeNode
        v-for="it in item.children"
        :key="it.id"
        :item="it"
      ></GumTreeNode>
    </template>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { EventBus } from "./EventBus";
import { NodeItem } from "./model";

@Component({
  components: {}
})
export default class GumTreeNode extends Vue {
  @Prop() item!: NodeItem;

  private selected = "";
  private checked = "";

  mounted() {
    EventBus.$on("unSelectNode", (id: string) => {
      if (this.item.id === id) {
        this.selected = "";
      }
    });
  }

  onCheck(it: NodeItem) {
    const item = {
      ...it,
      checked: !it.checked
    };
    this.checked = !it.checked ? "checked" : "";
    EventBus.$emit("clickNode", item);
  }

  onSelect(it: NodeItem) {
    if (this.selected == "selected") {
      return;
    }
    this.selected = "selected";
    EventBus.$emit("selectNode", it);
  }
}
</script>

<style lang="scss" scoped>
.gum-tree__node {
  width: 100%;
  padding-left: 18px;
  .gum-tree__node-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 32px;
    min-height: 32px;
    cursor: pointer;
    &:hover {
      color: #5a92d3;
    }
  }
  .gum-tree__node__title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-left: 6px;
  }
  .gum-tree__node-icon {
    width: 14px;
    height: 14px;
    background-image: url(./assets/org_tree_node_icon.png);
    background-size: 14px;
    margin-right: 10px;
  }
  .gum-tree__node-checkbox {
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: 1px solid #d3d9e7;
    background-color: #fff;
    border-radius: 2px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      border: 1px solid #4d4f53;
    }
  }
  .checked {
    background-color: #000000;
    &:hover {
      border: 1px solid #000000 !important;
    }
  }
  .selected {
    background-color: #1f2c41;
    color: #fff;
    .gum-tree__node-icon {
      background-image: url(./assets/org_tree_node_select_icon.png);
    }
  }
}
</style>
