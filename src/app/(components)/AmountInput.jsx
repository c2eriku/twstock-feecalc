import { useState } from "react"

export default function AmountInput({ unit, setUnit, dispatch }) {

    const [amount, setAmount] = useState(0);


    function handleChange(event) {
        const changeVal = Number(event.target.value);
        setAmount(changeVal);
        dispatch({ type: 'amount', value: changeVal });
    }

    function handleClick(event) {
        const changeVal = Number(event.target.value);
        const calcRes = amount + changeVal;
        setAmount(calcRes);
        dispatch({ type: 'amount', value: calcRes });
    }

    return <section>
        <div className='flex mb-2 gap-2'>
            <label>交易股數</label>
            <AmountRadio setUnit={setUnit}></AmountRadio>
        </div>
        <div className="flex">
            <input type="number" inputMode="decimal"
                className='border border-gray-300 rounded p-1 text-xl text-center w-1/3'
                value={amount} onChange={handleChange}></input>
            <div className="flex w-2/3 justify-around">
                {[1, 5, 10, 50].map((val, idx) => (
                    <button key={idx}
                        className="bg-gray-300 w-12 rounded p-1 text-xl text-center"
                        value={val}
                        onClick={handleClick}>+{val}</button>
                ))}
            </div>
        </div>
    </section>
}






function AmountRadio({ setUnit }) {
    return (
        <div className='flex flex-row gap-2'>
            <RadioInput id={1000} setUnit={setUnit}>整股</RadioInput>
            <RadioInput id={1} setUnit={setUnit}>零股</RadioInput>
        </div>
    );
}

function RadioInput({ children, id, setUnit }) {

    function handleChange(event) {
        const value = event.target.value;
        setUnit(Number(value));
    }

    return <div className='inline-block transition-all'>
        <label htmlFor={id} className='
        transition-all ease-in-out duration-200
        bg-white
        border
        rounded
        has-[:checked]:bg-indigo-400
        has-[:checked]:text-indigo-100 
        has-[:checked]:border-indigo-500'>
            <input className='hidden peer'
                type="radio" name="amount" id={id} value={id}
                onChange={handleChange}
                defaultChecked={id === 1000}
            />
            <span>{children}</span>
        </label>
    </div>
}