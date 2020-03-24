<template>
  <div class="line">
    <div
      class="key"
      :class="keyClass"
      :style="keyStyle"
    >
      <slot name="key"></slot>
    </div>
    <div
      class="value"
      :class="valueClass"
    >
      <slot name="value"></slot>
    </div>
    <div
      class="type"
      :class="typeClass"
    >
      <slot name="type">{{ type }}</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import which from "./whichType";
@Component({
  components: {}
})
export default class JCTypeWrapper extends Vue {
  @Prop({ default: () => {} }) value!: any;
  @Prop({ default: 0 }) depth!: number;
  @Prop({ default: "" }) keyClass!: string;
  @Prop({ default: "" }) valueClass!: string;
  @Prop({ default: "" }) typeClass!: string;

  get keyStyle() {
    return `padding-left: ${this.depth * 20 + 25}px`;
  }

  get type() {
    let type = "Null";
    try {
      type = {}.toString.call(this.value);
    } catch (e) {
      type = "[object Object]";
    }
    if (type === "[object Boolean]") {
      type = "Bool";
    } else if (type === "[object Number]") {
      // TODO 需要根据schema处理
      type = "Number";
    } else if (type === "[object String]") {
      type = "String";
    } else if (type === "[object Object]") {
      type = "Object";
    } else if (type === "[object Array]") {
      type = "Array";
    }
    return type;
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
