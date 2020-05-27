<template>
  <div class="jt-type">
    <jt-wrapper
      :type="type"
      :depth="depth"
    >
      <div
        slot="key"
        class="jt-key jt-key-date"
      >
        {{ rKey }}
      </div>
      <div
        slot="value"
        class="jt-value jt-value-object"
      >
        {{ value || "NULL"}}
      </div>
    </jt-wrapper>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Tooltip } from "ant-design-vue";
import { removeKeywork } from "../utils/handleKeyword";

@Component({
  components: {
    "a-tooltip": Tooltip
  }
})
export default class JTStringType extends Vue {
  @Prop({ default: "" }) value!: string;
  @Prop({ default: "" }) innerType!: string;
  @Prop({ default: "" }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;

  get rKey() {
    return removeKeywork(this.yKey);
  }

  get type() {
    return this.innerType || "Date";
  }
}
</script>
<style lang="scss">
.tooltip {
  max-width: 500px;
  .ant-tooltip-arrow {
    border-bottom-color: #464a5f;
  }
  .ant-tooltip-inner {
    display: flex;
    align-items: center;
    background: #464a5f;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-size: 12px;
    word-break: break-all;
  }
}
</style>
<style lang="scss" scoped>
@import "./style.scss";

.jt-value-string {
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
}

.jt-tooltip {
  white-space: pre-wrap;
}
</style>
