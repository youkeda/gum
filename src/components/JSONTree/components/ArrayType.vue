<template>
  <div class="jt-type">
    <jt-wrapper :value="value" :depth="depth">
      <div slot="key">
        <span class="expand-icon" @click="expand">X</span> {{ yKey }}
      </div>
      <div slot="value">
        {{ yValue }}
      </div>
    </jt-wrapper>
    <template v-if="localOpen">
      <component
        v-for="(cValue, index) in value"
        :is="whichType(cValue)"
        :key="`${depth}-${yKey}-${index}`"
        :yKey="`${index}`"
        :value="cValue"
        :depth="depth + 1"
      ></component>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import which from './whichType';

@Component({
  components: {}
})
export default class JTArrayType extends Vue {
  @Prop({ default: () => [] }) value!: any[];
  @Prop({ default: '' }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;

  private localOpen: boolean = false;

  mounted() {}

  get yValue() {
    return `Array[${this.value.length}]`;
  }

  whichType(value: any) {
    return which(value);
  }

  expand() {
    this.localOpen = !this.localOpen;
  }
}
</script>
