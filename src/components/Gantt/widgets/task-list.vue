<template>
  <g>
    <TaskComp v-for="" />
  </g>
</template>
<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator'
import TaskComp from './task.vue'
import Task, { TaskStatus } from '../model/Task'

@Component({
  components: {
    TaskComp
  }
})
export default class TaskList extends Vue {
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
}
</script>
<style lang="scss" scoped>
</style>