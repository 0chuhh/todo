import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { TodoFilter, TodoStatus } from 'models/todo';
import React, { FC } from 'react';
import classes from './style.module.scss';

export interface ITodoControlPanelProps {
    leftTodos: number;
    status: TodoFilter;
    onFilterChange: (
        event: React.MouseEvent<HTMLElement>,
        newStatus: TodoFilter,
    ) => void;
    onClearCompleted: () => void
}

export const TodoControlPanel: FC<ITodoControlPanelProps> = React.memo(({ leftTodos, status, onFilterChange, onClearCompleted }) => {
    return (
        <div className={classes.control}>
            {leftTodos} items left
            <ToggleButtonGroup exclusive onChange={onFilterChange} value={status}>
                <ToggleButton value={'ALL'}>All</ToggleButton>
                <ToggleButton value={TodoStatus.ACTIVE}>Active</ToggleButton>
                <ToggleButton value={TodoStatus.COMPLETED}>Completed</ToggleButton>
            </ToggleButtonGroup>
            <Button onClick={onClearCompleted}>Clear completed</Button>
        </div>
    );
});