import { Checkbox, Grow } from '@mui/material';
import { IListItemProps, ListItem } from 'components/ui/list/item';
import { ITodo, TodoStatus } from 'models/todo';
import React, { FC, useCallback } from 'react';
import classes from './style.module.scss';

export interface ITodoItemProps extends IListItemProps<ITodo> {
    value: ITodo;
    onClick?: (item: ITodo) => void;
}

export const TodoItem: FC<ITodoItemProps> = React.memo(({ value, onClick, className, ...restProps }) => {
    const completed = value.status === TodoStatus.COMPLETED;

    const handleClick = useCallback(() => {
        console.log('click', onClick);
        if (onClick) onClick(value);
    }, [value, onClick]);


    return (
        <Grow in={true}>
            <div onClick={handleClick} className={[className, completed ? classes.completed : classes.item].join(' ')}>
                <Checkbox className={classes.checkbox} checked={completed} />
                <ListItem value={value}  {...restProps} />
            </div>
        </Grow>
    );
});