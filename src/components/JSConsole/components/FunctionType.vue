<template>
  <div class="jc-type js-function">
    <jc-object
      :value="object"
      :allowOpen="allowOpen"
      type="function"
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
  private code: string = "";
  private object: any = {};
  private sig: string = "";

  mounted() {
    this.localOpen = this.open;
    this.code = Function.toString.call(this.value);
    let sig = this.code
      .substring(0, this.code.indexOf("{"))
      .trim()
      .replace(/\s/g, " ");
    if (!sig) {
      sig = this.code.substring(0, this.code.indexOf("=>")).trim() + " =>";
    }
    sig = sig.replace(/^function/, "ƒ");
    if (this.value.hasOwnProperty("toString")) {
      sig = `ƒ ${this.value.toString()}`;
    }

    this.sig = sig;
    this.object = Object.getOwnPropertyNames(this.value).reduce(
      (acc: any, curr: any) => {
        acc[curr] = this.value[curr];
        return acc;
      },
      {}
    );
  }

  @Watch("open")
  onOpenWatch() {}
}
</script>