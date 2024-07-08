import { HTMLAttributes, useCallback } from 'react';

export interface IListItemProps<Value> extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'>{
    label: string;
    value: Value;
    className?: string;
    onClick: (value: Value) => void;
}

export function ListItem<Value>({ label, value, className, onClick }: IListItemProps<Value>) {
    const handleClick = useCallback(() => onClick(value), [value]);
    return (
        <div onClick={handleClick} className={className}>{label}</div>
    );
}