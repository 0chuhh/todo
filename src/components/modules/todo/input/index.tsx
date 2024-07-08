import { InputAdornment, IconButton } from '@mui/material';
import { Input } from 'components/ui/input';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { ChangeEvent, FC, useState } from 'react';
import { ITodo, TodoStatus } from 'models/todo';
import { generateKey } from 'utils/generate-key';

interface ITodoInputProps {
    addTodo:(todo:ITodo) => void
}

export const TodoInput:FC<ITodoInputProps> = ({addTodo}) => {
    const [ value, setValue ] = useState<string>('');

    const [ error, setError ] = useState<string | null>(null)
    
    const handleChangeValue = (event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }

    const handleAdd = () => {
        if(value === '') {
            setError('text must be not empty');
            return;
        };

        setError(null);

        const newTodo:ITodo = {
            id:generateKey(value),
            text:value,
            status:TodoStatus.ACTIVE,
            expire_date:new Date()
        }

        addTodo(newTodo);
        setValue('')
    }

    return (
        <Input
            fullWidth
            InputProps={{
                startAdornment: <InputAdornment position='start'>
                    <IconButton onClick={handleAdd}>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </InputAdornment>
            }}
            placeholder='What needs to be done?'
            error={error !== null}
            helperText={error}
            value={value}
            onChange={handleChangeValue}
        />
    );
};