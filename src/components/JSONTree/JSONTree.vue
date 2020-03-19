<template>
  <div class="json-tree">
    <div
      v-for="(line, index) in data"
      :key="`line-${index}`"
      class="line"
    >
      <component
        :is="whichType(line)"
        :value="line"
      ></component>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import which from "./components/whichType";
@Component({
  components: {}
})
export default class JSConsole extends Vue {
  @Prop({ default: () => [] }) data!: any[];

  whichType(value: any) {
    return which(value);
  }
}
</script>
<style lang="scss" scoped>
.json-tree {
  .line {
  }
}
</style>
