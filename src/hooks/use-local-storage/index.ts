import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

type RemoveValue = () => void;

type UseLocalStorageReturnType<Value> = [Value, Dispatch<SetStateAction<Value>>, RemoveValue];


export const useLocalStorage = <Value>(key: string, initValue: Value | (() => Value)): UseLocalStorageReturnType<Value> => {

    const [value, setValue] = useState<Value>(initValue);

    const getItem = useCallback(() => {
        const storedValue = localStorage.getItem(key);
        if (!storedValue) {
            return setItem(initValue);
        }
        const parsedValue: Value = JSON.parse(storedValue);
        setValue(parsedValue);
    }, [key, initValue]);

    const setItem: Dispatch<SetStateAction<Value>> = useCallback((value) => {
        setValue((prev) => {
            const newValue = value instanceof Function ? value(prev) : value;
            localStorage.setItem(key, JSON.stringify(newValue));
            return newValue;
        });
    }, [key]);

    const removeItem: RemoveValue = useCallback(() => {
        const defaultValue = initValue instanceof Function ? initValue() : initValue
        setValue(defaultValue);
        localStorage.removeItem(key);
    }, [key]);

    useEffect(() => {
        getItem();
    }, [key,getItem]);

    return [value, setItem, removeItem];
};