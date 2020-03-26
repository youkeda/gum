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
  @Prop({ default: "" }) type!: string;
  @Prop({ default: 0 }) depth!: number;
  @Prop({ default: "" }) keyClass!: string;
  @Prop({ default: "" }) valueClass!: string;
  @Prop({ default: "" }) typeClass!: string;

  get keyStyle() {
    return `padding-left: ${this.depth * 20 + 25}px`;
  }
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
