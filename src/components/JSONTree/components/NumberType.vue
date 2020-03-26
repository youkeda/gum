<template>
  <div class="jt-type">
    <jt-wrapper
      :type="type"
      :depth="depth"
    >
      <div
        slot="key"
        class="jt-key jt-key-number"
      >
        {{ yKey }}
      </div>
      <div
        slot="value"
        class="jt-value jt-value-object"
      >
        {{ value }}
      </div>
    </jt-wrapper>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class JSNumberType extends Vue {
  @Prop({ default: 0 }) value!: number;
  @Prop({ default: "" }) yKey!: string;
  @Prop({ default: "Number" }) innerType!: string;
  @Prop({ default: 0 }) depth!: number;

  get type() {
    return this.innerType || "Number";
  }
}
</script>
<style lang="scss" scoped>
</style>