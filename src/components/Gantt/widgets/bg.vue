<template>
  <g>
    <line
      v-for="(line, index) in verLines"
      class="bg-line"
      :key="`ver-${index}`"
      :x1="line.x1"
      :x2="line.x2"
      :y1="line.y1"
      :y2="line.y2"
    ></line>
    <line
      v-for="(line, index) in horLines"
      class="bg-line"
      :key="`hor-${index}`"
      :x1="line.x1"
      :x2="line.x2"
      :y1="line.y1"
      :y2="line.y2"
    ></line>
  </g>
</template>
<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator'
import Line from '../model/Line'

@Component
export default class GanttBG extends Vue {
  private horLines: Line[] = []
  private verLines: Line[] = []

  @Inject() horGap!: number
  @Inject() verGap!: number
  @Inject() width!: number
  @Inject() height!: number

  private mounted() {
    for (let i = 0; i <= this.width; i = i + this.horGap) {
      this.verLines.push({
        x1: i,
        y1: 0,
        x2: i,
        y2: '100%'
      })
    }
    for (let i = 0; i <= this.height; i = i + this.verGap) {
      this.horLines.push({
        x1: 0,
        y1: i,
        x2: '100%',
        y2: i
      })
    }
  }

  private x1(line: Line) {
    return line.x1
  }
  private x2(line: Line) {
    return line.x2
  }
  private y1(line: Line) {
    return line.y1
  }
  private y2(line: Line) {
    return line.y2
  }
}
</script>
<style lang="scss" scoped>
.bg-line {
  stroke: rgba(0, 0, 0, 0.063);
  stroke-width: 1;
}
</style>