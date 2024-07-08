import { List } from 'components/ui/list';
import { ITodo, TodoStatus } from 'models/todo';
import { useState } from 'react';
import { TodoInput } from './input';
import { useLocalStorage } from 'hooks/use-local-storage';
import { ListItem } from 'components/ui/list/item';
import { Checkbox } from '@mui/material';
import { TodoItem } from './item';
import classes from './style.module.scss'

const items: ITodo[] = [
    {
        id: 0,
        text: 'some text',
        status: TodoStatus.ACTIVE,
    },
    {
        id: 1,
        text: 'some text',
        status: TodoStatus.ACTIVE,
    }
];

export const Todo = () => {
    const [todoList, setTodoList] = useLocalStorage<ITodo[]>('todos', items);

    const addTodo = (todo: ITodo) => setTodoList(prev => [...prev, todo]);

    const handleComplete = (item: ITodo) => () => {
        const status = item.status === TodoStatus.ACTIVE ? TodoStatus.COMPLETED : TodoStatus.ACTIVE;
        setTodoList((prev) => prev.map(i => i.id === item.id ? { ...i, status } : i));
    };

    return (
        <div className={classes.wrapper}>
            <TodoInput addTodo={addTodo} />
            <List
                getItemLabel={(item) => item.text}
                items={todoList}
                renderItem={(item, { className, ...props }) => (
                    <TodoItem
                        {...props}
                        todoItem={item}
                        className={className}
                        onComplete={handleComplete}
                    />
                )}
            />
        </div>
    );
};