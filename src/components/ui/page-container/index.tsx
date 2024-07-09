import { Container, ContainerProps, Typography } from '@mui/material';
import React, { FC } from 'react';
import classes from './style.module.scss'

export interface IPageContainerProps extends ContainerProps {
    title?:string
}

export const PageContainer: FC<IPageContainerProps> = React.memo(({ title='', children, ...restProps}) => {
    return (
        <Container maxWidth="sm" {...restProps}>
            <Typography className={classes.title} component={'h1'}>{title}</Typography>
            {children}
        </Container>
    );
});