<template>
  <div class="jc-type jc-array">
    <template v-if="!open">
      <div
        class="jc-type ArrayType closed"
        @click="toggle"
      >
        <em>Array</em>
        <span class="arb-info">({{value.length}})</span>
        [
        <template v-for="(item, index) in value">
          <component
            v-if="index < 10"
            :key="`array-${index}`"
            :is="whichType(item)"
            :value="item"
          ></component>
        </template>
        <span>,</span>
        <span class="js-more arb-info">
          …
        </span>
        ]
      </div>
    </template>
    <template v-if="open">
      <div class="jc-type ArrayType ">
        <div
          @click="toggle"
          class="jc-header"
        >

          <em>Array</em>
          <span class="arb-info">({{value.length}})</span>
          [
        </div>
        <div class="jc-group">
          <div
            class="key-value"
            v-for="(item, index) in value"
            :key="`array-sub-${index}`"
          >
            <span class="index">{{index}}:</span>
            <component
              :is="whichType(item)"
              :value="item"
            ></component>
          </div>
        </div>]
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import which from "./whichType";

@Component({
  components: {}
})
export default class IDEA extends Vue {
  @Prop({ default: true }) allowOpen!: boolean;
  @Prop({ default: [] }) value!: any[];
  @Prop({ default: true }) shadow!: boolean;

  private open: boolean = false;

  whichType(value: any) {
    return which(value);
  }

  toggle(e: any) {
    if (!this.allowOpen) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    this.open = !this.open;
  }
}
</script>