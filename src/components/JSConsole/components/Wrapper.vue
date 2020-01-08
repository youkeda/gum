<template>
  <component
    v-if="type"
    :value="value.value"
    :is="type"
    :displayName="sig"
    :shallow="shallow"
    :allowOpen="allowOpen"
    :open="open"
  />
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import which from "./whichType";
@Component({
  components: {}
})
export default class JCTypeWrapper extends Vue {
  @Prop({ default: () => {} }) value!: any;
  @Prop({ default: false }) shallow!: boolean;
  @Prop({ default: true }) allowOpen!: boolean;
  @Prop({ default: false }) open!: boolean;

  private type: string = "";
  private sig: string = "";

  mounted() {
    this.initType();
  }
  @Watch("value")
  onValueChange() {
    this.initType();
  }

  initType() {
    let sig = "";
    let type = "jc-null";
    const yType = this.value._y_type;
    if (yType === "[object Boolean]") {
      type = "jc-boolean";
    } else if (yType === "[object Number]") {
      type = "jc-number";
    } else if (yType === "[object String]") {
      type = "jc-string";
    } else if (yType === "[object Error]") {
      type = "jc-error";
    } else if (yType === "[object Object]") {
      type = "jc-object";
    } else if (yType === "[object Array]") {
      type = "jc-array";
    } else if (yType === "[object Function]") {
      sig = this.value.value.replace(/^function/, "ƒ");
      type = "jc-object";
      this.value.value = {};
    } else if (yType === "undefined") {
      type = "jc-undefined";
    } else if (yType === "null") {
      type = "jc-null";
    } else {
      sig = yType;
      if (
        Object.prototype.toString.apply(this.value.value) === "[object Array]"
      ) {
        type = "jc-array";
      } else if (
        Object.prototype.toString.apply(this.value.value) === "[object Object]"
      ) {
        type = "jc-object";
      } else {
        type = "jc-null";
      }
    }

    this.sig = sig;
    this.type = type;
  }
}
</script>
