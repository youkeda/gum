<template>
  <div
    class="jc-type jc-string"
    :class="{'quote': !bare}"
  >
    <template v-if="html">
      <div v-html="value" />
    </template>
    <template v-else>
      {{value}}
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
}
</script>