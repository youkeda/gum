<template>
  <div
    class="gantt__header"
    :style="headerStyle()"
  >
    <div
      v-for="(title, index) in titles"
      :key="`header-${index}`"
      :style="itemStyle()"
    >
      {{title}}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Inject, Watch } from 'vue-property-decorator'

@Component
export default class GanttBG extends Vue {
  private titles: String[] = []

  @Inject() horGap!: number
  @Inject() width!: number
  @Inject() test!: any

  @Watch('test')
  testChange(val: any) {
    console.log('[-------', val)
  }

  mounted() {
    for (let i = 0; i < this.width; i = i + this.horGap) {
      this.titles.push(`number: ${i}`)
    }
  }

  headerStyle() {
    return `width: ${this.width}px`
  }
  itemStyle() {
    return `width: ${this.horGap}px`
  }
}
</script>
<style lang="scss" scoped>
.gantt__header {
  background-color: red;
  display: flex;
}
</style>