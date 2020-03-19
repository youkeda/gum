<template>
  <div class="gum-tree">
    <GumTreeNode
      v-for="item in items"
      :item="item"
      :key="item.id"
    ></GumTreeNode>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import GumTreeNode from "./TreeNode.vue";
import { EventBus } from "./EventBus";
import { NodeItem } from "./model";
export interface ItemMap {
  [key: string]: any;
}
@Component({
  components: {
    GumTreeNode
  }
})
export default class GumTree extends Vue {
  @Prop() data!: any[];

  private items: NodeItem[] = [];
  private itemMap: ItemMap = {};
  private selectItemId: string = "";

  created() {
    EventBus.$on("clickNode", (item: NodeItem) => {
      this.itemMap[item.id!].checked = item.checked;
    });
    EventBus.$on("selectNode", (item: NodeItem) => {
      if (this.selectItemId) {
        this.itemMap[this.selectItemId].selected = false;
        EventBus.$emit("unSelectNode", this.selectItemId);
      }
      this.selectItemId = item.id;
      this.itemMap[item.id!].selected = true;
    });
    this.data.map(it => {
      this.eachData(it, this.items);
    });
  }

  eachData(item: any, items: NodeItem[]): void {
    const it = {
      ...item
    };
    if (it.checked == undefined) {
      it.checked = false;
    }
    if (it.expanded == undefined) {
      it.expanded = false;
    }
    items.push(it);

    this.itemMap[it.id!] = it;

    if (item.children) {
      it.children = [];
      item.children.map((child: any) => {
        this.eachData(child, it.children);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.gum-tree {
  width: 100%;
}
</style>
