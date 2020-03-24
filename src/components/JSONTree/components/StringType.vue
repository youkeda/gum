<template>
  <div class="jt-type">
    <jt-wrapper
      :value="value"
      :depth="depth"
    >
      <div slot="key">
        {{ yKey }}
      </div>

      <a-tooltip
        placement="bottom"
        :mouseEnterDelay="1"
        slot="value"
        overlayClassName="tooltip"
      >
        <template slot="title">
          <span>{{value}}</span>
        </template>
        <div class="jt-value-string">
          {{formatValue}}
        </div>
      </a-tooltip>
    </jt-wrapper>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Tooltip } from "ant-design-vue";

@Component({
  components: {
    "a-tooltip": Tooltip
  }
})
export default class JTStringType extends Vue {
  @Prop({ default: "" }) value!: string;
  @Prop({ default: "" }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;

  get formatValue() {
    if (
      (this.value.startsWith("{") && this.value.endsWith("}")) ||
      (this.value.startsWith("[") && this.value.endsWith("]"))
    ) {
      let result = JSON.stringify(JSON.parse(this.value), null, 2);
      return result;
    }
    return this.value;
  }
}
</script>
<style lang="scss">
.tooltip {
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
</style>
