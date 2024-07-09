import { List } from 'components/ui/list';
import { ITodo, TodoFilter, TodoStatus } from 'models/todo';
import { useCallback, useMemo, useState } from 'react';
import { TodoInput } from './input';
import { useLocalStorage } from 'hooks/use-local-storage';
import { TodoItem } from './item';
import classes from './style.module.scss';
import { TodoControlPanel } from './control-panel';

const items: ITodo[] = [
    {
        id: 0,
        text: 'test todo',
        status: TodoStatus.ACTIVE,
    },
    {
        id: 1,
        text: 'test todo 2',
        status: TodoStatus.ACTIVE,
    }
];

export const Todo = () => {
    const [todoList, setTodoList] = useLocalStorage<ITodo[]>('todos', items);

    const [filterStatus, setFilterStatus] = useState<TodoFilter>('ALL');

    const activeTodosCount = useMemo(()=>todoList.filter(todo=>todo.status===TodoStatus.ACTIVE).length,[todoList])

    const addTodo = useCallback((todo: ITodo) => setTodoList(prev => [...prev, todo]),[todoList]);

    const handleComplete = useCallback((item: ITodo) => {
        const status = item.status === TodoStatus.ACTIVE ? TodoStatus.COMPLETED : TodoStatus.ACTIVE;
        setTodoList((prev) => prev.map(i => i.id === item.id ? { ...i, status } : i));
    },[todoList]);

    const handleChangeFilterStatus = useCallback((_event: React.MouseEvent<HTMLElement>, newStatus: TodoFilter) => {
        setFilterStatus(newStatus);
    },[]);

    const filterTodos = useCallback((items: ITodo[]): ITodo[] => {
        switch (filterStatus) {
            case 'ACTIVE':
                return items.filter(i => i.status === TodoStatus.ACTIVE);

            case 'COMPLETED':
                return items.filter(i => i.status === TodoStatus.COMPLETED);

            default:
                return items;
        }
    }, [filterStatus]);

    const handleClearCompleted = useCallback(() => {
        setTodoList(prev=>prev.filter(todo=>todo.status !== TodoStatus.COMPLETED));
    },[todoList]);

    return (
        <div className={classes.wrapper}>
            <TodoInput addTodo={addTodo} />
            <List
                className={classes.list}
                getItemLabel={(item) => item.text}
                items={todoList}
                filter={filterTodos}
                onItemClick={handleComplete}
                renderItem={(_item, props) => (
                    <TodoItem
                        {...props}
                    />
                )}
            />
            <TodoControlPanel
                onFilterChange={handleChangeFilterStatus}
                leftTodos={activeTodosCount}
                status={filterStatus}
                onClearCompleted={handleClearCompleted}
            />
        </div>
    );
};