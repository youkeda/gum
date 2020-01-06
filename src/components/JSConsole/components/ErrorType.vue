<template>
  <div class="jc-type jc-error">
    <jc-object
      :value="value"
      :allowOpen="allowOpen"
      type="error"
      :shallow="shallow"
      :open="localOpen"
      :displayName="sig"
    ></jc-object>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class JCFunctionType extends Vue {
  @Prop({ default: true }) allowOpen!: boolean;
  @Prop({ default: () => {} }) value!: any;
  @Prop({ default: true }) shallow!: boolean;
  @Prop({ default: false }) open!: boolean;

  private localOpen: boolean = false;
  private sig: string = "";

  mounted() {
    this.localOpen = this.open;
    this.sig = this.value.name || this.value.constructor.name;
  }

  @Watch("open")
  onOpenWatch() {}
}
</script>