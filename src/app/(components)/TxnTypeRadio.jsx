'use client';

import { useState } from "react";

export default function TxnTypeRadio({ txnType: txnTypes, dispatch }) {

    const [txnType, setTxnType] = useState(txnTypes);

    function handleTxnTypeChange(event) {
        setTxnType(event);
        dispatch({ type: 'txnType', value: event });
    }

    return (
        <div className='flex flex-row gap-2'>
            <RadioInput id={'spot'} type={txnType} onchange={handleTxnTypeChange}>現買賣</RadioInput>
            <RadioInput id={'daily'} type={txnType} onchange={handleTxnTypeChange}>當沖</RadioInput>
        </div>
    );
}

function RadioInput({ children, id, type, onchange }) {

    function handleChange(event) {
        const value = event.target.value;
        onchange(value);
    }

    return <div className='inline-block transition-all'>
        <label htmlFor={id} className='
        transition-all ease-in-out duration-200
        bg-white
        border
        rounded text-3xl
        has-[:checked]:bg-indigo-400
        has-[:checked]:text-indigo-100 
        has-[:checked]:border-indigo-500'>
            <input className='hidden peer'
                type="radio" name="type" id={id} value={id}
                onChange={handleChange} defaultChecked={id === type}
            />
            {/* <CheckIcon className='hidden size-4 peer-checked:inline-block'></CheckIcon> */}
            <span>{children}</span>
        </label>
    </div>
}