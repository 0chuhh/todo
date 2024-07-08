import { Fragment } from 'react/jsx-runtime';
import classes from './style.module.scss';
import { defaultGetItemLabel, defaultRenderItem } from './utils';
import { generateKey } from 'utils/generate-key';

export interface IListProps<Value> {
    items: Value[];
    getItemLabel?: typeof defaultGetItemLabel<Value>;
    renderItem?: typeof defaultRenderItem<Value>;

}

export function List<Value>({
    items,
    getItemLabel = defaultGetItemLabel,
    renderItem = defaultRenderItem
}: IListProps<Value>) {

    const handleItemClick = (item: Value) => {
        console.log(item);
    };

    return (
        <div className={classes.list}>
            {
                items.map((item, index) => (
                    <Fragment key={generateKey(index)}>
                        {
                            renderItem(item, {
                                className: classes.item,
                                value: item,
                                label: `${getItemLabel(item)}`,
                                onComplete: handleItemClick
                            })
                        }
                    </Fragment>
                ))
            }
        </div>
    );
}