import { Checkbox } from '@mui/material';
import { IListItemProps, ListItem } from 'components/ui/list/item';
import { ITodo, TodoStatus } from 'models/todo';
import React, { FC } from 'react';
import classes from './style.module.scss'

export interface ITodoItemProps extends IListItemProps<ITodo> {
    todoItem: ITodo;
    onComplete: (item: ITodo) => () => void;
}

export const TodoItem: FC<ITodoItemProps> = React.memo(({ todoItem, onComplete, className, ...restProps }) => {
    const completed = todoItem.status === TodoStatus.COMPLETED;
    return (
        <div onClick={onComplete(todoItem)} className={[className, completed?classes.completed:classes.item].join(' ')}>
            <Checkbox className={classes.checkbox} checked={completed} />
            <ListItem  {...restProps} />
        </div>
    );
});