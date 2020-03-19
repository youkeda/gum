<template>
  <div class="jt-type jt-string">
    {{ str }}
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class JSStringType extends Vue {
  @Prop({ default: "" }) value!: string;
}
</script>
