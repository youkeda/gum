<template>
  <div class="gantt">
    <GanttHeader></GanttHeader>
    <svg
      width="1000"
      height="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GanttBG />
      <TaskListComp :taskList="taskList" />
    </svg>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator'
import GanttBG from './widgets/bg.vue'
import GanttHeader from './widgets/header.vue'
import Task, { TaskStatus } from './model/Task'
import TaskListComp from './widgets/task.vue'

@Component({
  components: {
    GanttBG,
    GanttHeader,
    TaskListComp
  }
})
export default class Gantt extends Vue {
  private sawTest = {
    abc: 123
  }

  @Provide() horGap: number = 100
  @Provide() verGap: number = 40
  @Provide() width: number = 1000
  @Provide() height: number = 500
  @Provide() test = this.sawTest

  private taskList: Task[] = [
    {
      startTime: new Date(),
      endTime: new Date(),
      title: '周帆测试',
      owner: '樊梵',
      status: TaskStatus.TODO
    },
    {
      startTime: new Date(),
      endTime: new Date(),
      title: '周帆测试',
      owner: '樊梵',
      status: TaskStatus.TODO
    },
    {
      startTime: new Date(),
      endTime: new Date(),
      title: '周帆测试',
      owner: '樊梵',
      status: TaskStatus.TODO
    }
  ]

  mounted() {
    setTimeout(() => {
      this.sawTest.abc = 445
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.gantt {
  width: 800px;
  height: 500px;
  overflow: scroll;
}
</style>