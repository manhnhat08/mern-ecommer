import { useState, useEffect } from "react";


// Use debounce to create delay for input 
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);


        return() => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
}

export default useDebounce