import {useState, useEffect} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        let item = window.localStorage.getItem(key);
        if(item === "undefined") {
         item = "";
        }
        return item ? JSON.parse(item) : initialValue;
    })

    console.log(key + " " + initialValue + " " + value);

    useEffect(() => {
        const item = JSON.stringify(value);
        window.localStorage.setItem(key, item);
    }, [key, value])

    return [value, setValue];
}