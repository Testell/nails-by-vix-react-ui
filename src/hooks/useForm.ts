import { useState } from "react";


export const useForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValues({...values, [event.target.name]:
        event.target.value});
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]:
        event.target.value});
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    };

    return{
        onChange,
        onChangeInput,
        onSubmit,
        values,
    };
};