import classes from './style.module.scss';
import { defaultGetItemLabel, defaultRenderItem } from './utils';
import { HTMLAttributes, useMemo } from 'react';
export interface IListProps<Value> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    items: Value[];
    getItemLabel?: typeof defaultGetItemLabel<Value>;
    renderItem?: typeof defaultRenderItem<Value>;
    onItemClick?: (item: Value) => void;
    filter?: (items: Value[]) => Value[];
}

export function List<Value>({
    items,
    getItemLabel = defaultGetItemLabel,
    renderItem = defaultRenderItem,
    onItemClick,
    filter = (items) => items,
    className,
    ...restProps
}: IListProps<Value>) {

    const filteredItems = useMemo(()=>filter(items), [filter, items])

    return (
        <div {...restProps} className={[classes.list, className].join(' ')}>
            {
                filteredItems.map((item, index) => (
                    <div key={`${index}-${getItemLabel(item)}`}>
                        {
                            renderItem(item, {
                                className: classes.item,
                                value: item,
                                label: `${getItemLabel(item)}`,
                                onClick: onItemClick
                            })
                        }
                    </div>
                ))
            }
        </div>
    );
}