<template>
  <div
    class="jc-type jc-string"
    :class="{ quote: !bare, bareString: bare, shallow: shallow }"
  >
    <template v-if="html">
      <div v-html="str" />
    </template>
    <template v-else>
      {{ str }}
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class JSStringType extends Vue {
  @Prop({ default: "" }) value!: string;
  @Prop({ default: false }) html!: boolean;
  @Prop({ default: false }) bare!: boolean;
  @Prop({ default: false }) shallow!: boolean;

  private str: string = "";

  mounted() {
    this.initMutliLine();
  }

  @Watch("value")
  onValueChange() {
    this.initMutliLine();
  }

  @Watch("shallow")
  onShallowChange() {
    this.initMutliLine();
  }

  initMutliLine() {
    this.str = this.value;
    if (this.shallow) {
      this.str = this.value.replace(/\n/g, " ↵ ");
    }
  }
}
</script>
