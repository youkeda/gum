<template>
  <div class="jt-type">
    <jt-wrapper type="Array" :depth="depth">
      <div slot="key" class="jt-expand" @click="expand">
        <span class="jt-expand-icon" :class="{ isExapnd: localOpen }"></span>
        <div class="jt-key jt-key-array">{{ rKey }}</div>
      </div>
      <div slot="value" class="jt-value-array">
        {{ yValue }}
      </div>
    </jt-wrapper>
    <template v-if="localOpen">
      <component
        v-for="(match, index) in matchs"
        :is="match.type"
        :innerType="match.innerType"
        :key="`${depth}-${yKey}-${index}`"
        :yKey="match.key"
        :value="match.value"
        :depth="depth + 1"
      ></component>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, Inject } from 'vue-property-decorator';
import which from './whichType';
import Field from '../model/field';
import { ParserFunc } from '../parser';
import Match from '../model/match';
import { removeKeywork } from '../utils/handleKeyword';

@Component({
  components: {},
})
export default class JTArrayType extends Vue {
  @Prop({ default: () => [] }) value!: any[];
  @Prop({ default: '' }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;
  @Inject('jtParser') jtParser!: ParserFunc;

  private localOpen: boolean = false;
  private matchs: Match[] = [];

  get rKey() {
    return removeKeywork(this.yKey);
  }

  get yValue() {
    return `Array[${this.value.length}]`;
  }

  expand() {
    this.localOpen = !this.localOpen;
  }

  mounted() {
    this.initMatch();
  }

  @Watch('data')
  onDataChange() {
    this.initMatch();
  }

  initMatch() {
    this.matchs = [];
    this.value.map((item, index) => {
      this.matchs.push({
        ...which(undefined, item, this.jtParser),
        key: index,
        value: item,
      });
    });
  }
}
</script>
