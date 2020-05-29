<template>
  <div class="jt-type">
    <jt-wrapper
      :value="value"
      :depth="depth"
      type="Boolean"
    >
      <div
        slot="key"
        class="jt-key jt-key-boolean"
      >
        {{ rKey }}
      </div>
      <div
        slot="value"
        class="jt-value jt-value-object"
      >
        {{ value === null ? "NULL" : value }}
      </div>
    </jt-wrapper>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { removeKeywork } from "../utils/handleKeyword";

@Component({
  components: {}
})
export default class JCBooleanType extends Vue {
  @Prop({ default: true }) value!: boolean;
  @Prop({ default: "" }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;

  get rKey() {
    return removeKeywork(this.yKey);
  }
}
</script>
