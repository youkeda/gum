<template>
  <div class="jt-type">
    <jt-wrapper
      :type="type"
      :depth="depth"
    >
      <div
        slot="key"
        class="jt-key jt-key-string"
        :class="{'jt-key-key': isKey}"
      >
        {{ yKey }}
      </div>

      <a-tooltip
        placement="bottom"
        :mouseEnterDelay="1"
        slot="value"
        :arrowPointAtCenter="true"
        overlayClassName="tooltip"
      >
        <template slot="title">
          <span class="jt-tooltip">{{formatValue}}</span>
        </template>
        <div class="jt-value jt-value-string">
          {{value}}
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
  @Prop({ default: "" }) innerType!: string;
  @Prop({ default: "" }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;

  get isKey() {
    return this.yKey === "id" || this.yKey === "_id";
  }

  get formatValue() {
    if (!this.value) {
      return "";
    }
    if (
      (this.value.startsWith("{") && this.value.endsWith("}")) ||
      (this.value.startsWith("[") && this.value.endsWith("]"))
    ) {
      return JSON.stringify(JSON.parse(this.value), null, 4);
    }
    return this.value;
  }

  get type() {
    let type = this.innerType || "String";
    if (type === "String") {
      if (this.value.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/)) {
        type = "Date";
      }
    }
    return type;
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
