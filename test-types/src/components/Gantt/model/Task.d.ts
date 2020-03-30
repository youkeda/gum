export declare enum TaskStatus {
    TODO = 0,
    DOING = 1,
    TEST = 2,
    DONE = 3
}
export default interface Task {
    startTime: Date;
    endTime: Date;
    owner: string;
    title: string;
    status: TaskStatus;
}
