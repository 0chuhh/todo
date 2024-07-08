import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { TodoFilter, TodoStatus } from 'models/todo';
import React, { FC } from 'react';
import classes from './style.module.scss'

export interface ITodoControlPanelProps {
    leftTodos: number;
    status: TodoFilter;
    onChange:(
        event: React.MouseEvent<HTMLElement>,
        newStatus: string | null,
      )=>void
}

export const TodoControlPanel: FC<ITodoControlPanelProps> = ({ leftTodos, status }) => {
    return (
        <div className={classes.control}>
            {leftTodos} items left
            <ToggleButtonGroup onChange={} value={status}>
                <ToggleButton value={'ALL'}>All</ToggleButton>
                <ToggleButton value={TodoStatus.ACTIVE}>Active</ToggleButton>
                <ToggleButton value={TodoStatus.COMPLETED}>Completed</ToggleButton>
            </ToggleButtonGroup>
            <Button>Clear completed</Button>
        </div>
    );
};