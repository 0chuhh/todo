import { IListItemProps, ListItem } from "./item";

type ItemWithLabel = {
    label: string;
    [key: string]: any;
};

function isItemWithLabel(option: any): option is ItemWithLabel {
    return option.label !== undefined;
}

export function defaultGetItemLabel<Value>(item: Value): string | number | boolean {
    if (item === undefined) throw new Error('item undefined');
    if (typeof item === 'string') return item;

    if (typeof item === 'object' && isItemWithLabel(item)) {
        return item.label;
    }
    else throw new Error('item must contain property "label", or you can pass your own getOptionLabel prop');
}

export function defaultRenderItem<Value>(_item: Value, itemProps: IListItemProps<Value>) {
    return <ListItem {...itemProps} />;
}