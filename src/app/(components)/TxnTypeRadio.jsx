'use client';

export default function TxnTypeRadio({ onChange }) {
    return (
        <div className='flex flex-row gap-2'>
            <RadioInput id={'spot'} onChange={onChange}>現買賣</RadioInput>
            <RadioInput id={'daily'} onChange={onChange}>當沖</RadioInput>
        </div>
    );
}

function RadioInput({ children, id, onChange }) {
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
                onChange={onChange} defaultChecked={id === 'spot'}
            />
            {/* <CheckIcon className='hidden size-4 peer-checked:inline-block'></CheckIcon> */}
            <span>{children}</span>
        </label>
    </div>
}