<template>
  <div class="jc-type js-boolean">
    {{value ? 'true' : 'false'}}
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class JCBooleanType extends Vue {
  @Prop({ default: true }) value!: boolean;
}
</script>