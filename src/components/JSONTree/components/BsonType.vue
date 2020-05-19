<template>
  <div class="jt-type">
    <jt-wrapper :type="type" :depth="depth">
      <div slot="key" class="jt-key" :class="bsonClass">
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
          <span class="jt-tooltip">{{ formatValue }}</span>
        </template>
        <div class="jt-value jt-value-string">
          {{ value }}
        </div>
      </a-tooltip>
    </jt-wrapper>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Tooltip } from 'ant-design-vue';

@Component({
  components: {
    'a-tooltip': Tooltip,
  },
})
export default class JTBsonType extends Vue {
  @Prop({ default: '' }) value!: string;
  @Prop({ default: '' }) innerType!: string;
  @Prop({ default: '' }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;

  get isKey() {
    return this.yKey === 'id' || this.yKey === '_id';
  }

  get bsonClass() {
    let classs: any = { 'jt-key-key': this.isKey };
    classs[`jt-key-${this.type.toLowerCase()}`] = true;
    return classs;
  }

  mounted() {}

  get formatValue() {
    return this.value;
  }
  get type() {
    return this.value.constructor.name || 'String';
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
@import './style.scss';

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
