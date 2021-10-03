import { useState } from "react";

const useInput = (initial, setter) => {
    const [value, setValue] = useState(initial);

    return {
        value,
        onChange: e => setValue(e.target.value),
        onBlur: e => setter(value),
        onKeyDown: e => {
            if (e.key === 'Enter') {
                setter(value)
            }
        }
    };
};

export default useInput