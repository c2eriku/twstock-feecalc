import { useState } from "react"

export default function AmountInput({ unit: units, amount: amounts, dispatch }) {

    const [unit, setUnit] = useState(units);
    const [amount, setAmount] = useState(amounts);

    function handleUnitChange(event) {
        const changeVal = Number(event);
        setUnit(changeVal);
        dispatch({ type: 'unit', value: changeVal });
    }

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

    function handleClear() {
        setAmount(0);
        dispatch({ type: 'amount', value: 0 });
    }

    return <section>
        <div className='flex mb-2 gap-2'>
            <label>交易股數</label>
            <AmountRadio unit={unit} handleUnitChange={handleUnitChange}></AmountRadio>
        </div>
        <div className="flex flex-col">

            <div className="flex mb-2">
                <input type="number" inputMode="decimal"
                    className='border border-gray-300 rounded mr-2 p-1 w-5/6 text-xl text-center'
                    value={amount} onChange={handleChange}></input>
                <button className="px-2 rounded w-1/6 bg-red-400" onClick={handleClear}>clear</button>
            </div>

            <div className="flex flex-row-reverse justify-between">
                {[1, 5, 10, 50, 100].map((val, idx) => (
                    <button key={idx}
                        className="bg-gray-300 w-16 rounded p-1 text-xl text-center"
                        value={val}
                        onClick={handleClick}>+{val}</button>
                ))}
            </div>
        </div>
    </section>
}






function AmountRadio({ unit, handleUnitChange }) {
    return (
        <div className='flex flex-row gap-2'>
            <RadioInput id={1000} unit={unit} onchange={handleUnitChange}>整股</RadioInput>
            <RadioInput id={1} unit={unit} onchange={handleUnitChange}>零股</RadioInput>
        </div>
    );
}

function RadioInput({ children, id, unit, onchange }) {

    function handleChange(event) {
        const value = event.target.value;
        onchange(Number(value));
    }

    return <div className='inline-block transition-all'>
        <label htmlFor={id} className='
        p-1
        transition-all ease-in-out duration-200
        bg-white
        border
        rounded
        has-[:checked]:bg-indigo-400
        has-[:checked]:text-indigo-100 
        has-[:checked]:border-indigo-500'>
            <input className='hidden peer'
                type="radio" name="unit" id={id} value={id}
                onChange={handleChange}
                defaultChecked={id === unit}
            />
            <span>{children}</span>
        </label>
    </div>
}