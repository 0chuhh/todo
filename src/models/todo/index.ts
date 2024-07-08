export enum TodoStatus {
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
    EXPIRED = 'EXPIRED'
}

export interface ITodo {
    id:number | string;
    text: string;
    status: TodoStatus;
    expire_date?: Date
}