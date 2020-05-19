<template>
  <div class="jt-type">
    <jt-wrapper :value="value" :depth="depth" type="Boolean">
      <div slot="key" class="jt-key jt-key-boolean">
        {{ yKey }}
      </div>
      <div slot="value" class="jt-value jt-value-object">
        {{ value }}
      </div>
    </jt-wrapper>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class JCBooleanType extends Vue {
  @Prop({ default: true }) value!: boolean;
  @Prop({ default: '' }) yKey!: string;
  @Prop({ default: 0 }) depth!: number;
}
</script>
