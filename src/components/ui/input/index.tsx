import { TextField, TextFieldProps } from '@mui/material';
import React, { FC } from 'react';
import classes from './style.module.scss';

export type IInputProps = TextFieldProps;

export const Input: FC<IInputProps> = ({className, ...restProps }) => {
    return (
        <TextField
            {...restProps}
            className={[classes.input, className].join(' ')}
        />
    );
};