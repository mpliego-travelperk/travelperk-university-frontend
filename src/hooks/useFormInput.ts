import React, {useState} from 'react';

export default (initialVal: string): [string, any, any] => {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue('');
    };
    return [value, handleChange, reset];
};
