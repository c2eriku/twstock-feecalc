'use client';

import { useState } from "react";

export default function TxnTypeRadio() {
    const [type, setType] = useState('spot');

    function handleChange(value) {
        setType(value)
    }

    return (
        <div className='flex flex-row gap-2'>
            {type}
            <RadioInput id={'spot'} onChange={(e) => handleChange(e.target.value)}>現買賣</RadioInput>
            <RadioInput id={'daily'} onChange={(e) => handleChange(e.target.value)}>當沖</RadioInput>
        </div>
    );
}

function RadioInput({ children, id, onChange }) {
    return <div className='inline-block transition-all'>
        <label for={id} className='
        transition-all ease-in-out duration-200
        bg-white
        border
        rounded text-3xl
        has-[:checked]:bg-indigo-400
        has-[:checked]:text-indigo-100 
        has-[:checked]:border-indigo-500'>
            <input className='hidden peer'
                type="radio" name="type" id={id} value={id}
                onChange={onChange}
            />
            {/* <CheckIcon className='hidden size-4 peer-checked:inline-block'></CheckIcon> */}
            <span>{children}</span>
        </label>
    </div>
}