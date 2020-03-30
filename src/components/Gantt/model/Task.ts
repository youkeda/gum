export enum TaskStatus {
  TODO,
  DOING,
  TEST,
  DONE
}

export default interface Task {
  startTime: Date
  endTime: Date
  owner: string
  title: string
  status: TaskStatus
}
