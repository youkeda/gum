<template>
  <div class="jt-type">
    <jt-wrapper type="Object" :depth="depth" :class="{ 'jt-sep': localOpen }">
      <div slot="key" class="jt-expand" @click="expand">
        <span class="jt-expand-icon " :class="{ isExapnd: localOpen }"></span>
        <div class="jt-key jt-key-object">{{ keyTxt }}</div>
      </div>
      <div slot="value" class="jt-value jt-value-object">
        {{ yValue }}
      </div>
    </jt-wrapper>
    <template v-if="localOpen">
      <component
        v-for="match in matchs"
        :is="match.type"
        :innerType="match.innerType"
        :key="`${depth}-${yKey}-${match.key}`"
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

const LIMIT_CLOSED = 5;
@Component({
  components: {},
})
export default class JCObjectType extends Vue {
  @Prop({ default: () => {} }) value!: any;
  @Prop({ default: '' }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;
  @Inject('jtParser') jtParser!: ParserFunc;

  private localOpen: boolean = false;
  private matchs: Match[] = [];

  get keyTxt() {
    if (this.yKey || `${this.yKey}` === '0') {
      return this.yKey;
    }
    if (this.value.id) {
      return this.value.id;
    }
    if (this.value._id) {
      return this.value._id;
    }
    return this.value[Object.keys(this.value)[0]];
  }

  get yValue() {
    return `{${Object.keys(this.value).length} attributes}`;
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
    Object.keys(this.value).map((key, index) => {
      this.matchs.push({
        ...which(key, this.value[key], this.jtParser),
        key: key,
        value: this.value[key],
      });
    });
  }
}
</script>
<style lang="scss" scoped>
@import './style.scss';

.jt-type {
  .expand-icon {
    cursor: pointer;
  }
}
</style>
