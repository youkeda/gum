<template>
  <div class="jt-type">
    <jt-wrapper
      :value="value"
      :depth="depth"
      :class="{'jt-sep': localOpen}"
    >
      <div
        slot="key"
        class="jt-expand"
        @click="expand"
      >
        <span
          class="jt-expand-icon "
          :class="{'isExapnd': localOpen}"
        ></span>
        <div class="jt-key jt-key-object">{{ keyTxt }}</div>
      </div>
      <div
        slot="value"
        class="jt-value jt-value-object"
      >
        {{ yValue }}
      </div>
    </jt-wrapper>
    <template v-if="localOpen">
      <component
        v-for="(cValue, cKey) in value"
        :is="whichType(cValue)"
        :key="`${depth}-${yKey}-${cKey}`"
        :yKey="cKey"
        :value="cValue"
        :depth="depth + 1"
      ></component>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import which from "./whichType";

const LIMIT_CLOSED = 5;
@Component({
  components: {}
})
export default class JCObjectType extends Vue {
  @Prop({ default: () => {} }) value!: any;
  @Prop({ default: "" }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;

  private localOpen: boolean = false;

  mounted() {}

  get keyTxt() {
    if (this.yKey) {
      return this.yKey;
    }
    if (this.value.id) {
      return this.value.id;
    }
    if (this.value._id) {
      return this.value._id;
    }
    return "";
  }

  whichType(value: any) {
    return which(value);
  }

  get yValue() {
    return `{${Object.keys(this.value).length} attributes}`;
  }

  expand() {
    this.localOpen = !this.localOpen;
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";

.jt-type {
  .expand-icon {
    cursor: pointer;
  }
}
</style>
