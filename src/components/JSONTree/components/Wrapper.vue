<template>
  <div class="line">
    <div class="key" :class="keyClass" :style="keyStyle">
      <slot name="key"></slot>
    </div>
    <div class="value" :class="valueClass" :style="valueStyle">
      <slot name="value"></slot>
    </div>
    <div class="type" :class="typeClass" style="width: 150px">
      <slot name="type">{{ type }}</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, Inject } from 'vue-property-decorator';
import which from './whichType';
@Component({
  components: {}
})
export default class JCTypeWrapper extends Vue {
  @Prop({ default: '' }) type!: string;
  @Prop({ default: 0 }) depth!: number;
  @Prop({ default: '' }) keyClass!: string;
  @Prop({ default: '' }) valueClass!: string;
  @Prop({ default: '' }) typeClass!: string;

  @Inject('jtWidth') jtWidth!: any;

  get keyStyle() {
    return `padding-left: ${this.depth * 20 + 25}px; width: ${
      this.jtWidth.key
    }px`;
  }

  @Watch('jtWidth')
  onJtWidthChange() {
    console.log('--------', this.jtWidth);
  }

  get valueStyle() {
    return `width: calc(100% - ${this.jtWidth.key + 150}px)`;
  }
}
</script>
<style lang="scss">
@import './style.scss';
</style>
