<template>
  <div class="jc-type jc-number">
    {{value}}
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class JSNumberType extends Vue {
  @Prop({ default: 0 }) value!: number;
}
</script>