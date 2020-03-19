<template>
  <div class="jt-type">
    <jt-wrapper :value="value" :depth="depth">
      <div slot="key">
        {{ yKey }}
      </div>
      <div slot="value">
        {{ value }}
      </div>
    </jt-wrapper>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class JSNumberType extends Vue {
  @Prop({ default: 0 }) value!: number;
  @Prop({ default: '' }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;
}
</script>
