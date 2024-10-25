import { useState } from "react"
import { handleException } from "../helpers/handleException";

function useLocalStorage<T>(key: string, initial: any = null): [T, (value: T) => void] {
    const [storageItem, setStorageItem] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            if(!item) {
                localStorage.setItem(key, initial);
                return initial;
            }
            return JSON.parse(item);
        }
        catch(ex: unknown) {
            handleException(ex);
            return initial;
        }
    });

    const setLocalStorageItem = (value: T) => {
        setStorageItem(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [storageItem, setLocalStorageItem];
}