import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        if(item !== undefined) {
            return item ? JSON.parse(item) : initialValue;
        }
    })

    useEffect(() => {
        const item = JSON.stringify(value);
        window.localStorage.setItem(key, item);
    }, [key, value])

    return [value, setValue];
}