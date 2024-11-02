import { useState } from "react";

export default function DiscountRate({ discountRate: discountRates, dispatch }) {

    const [discountRate, setDiscountRate] = useState(discountRates);

    const brokers = [
        { label: '國泰證券', discountRate: 0.28 },
        { label: '富邦證券', discountRate: 0.18 }
    ];

    function handleChange(event) {
        const changeVal = Number(event.target.value);
        dispatch({ type: 'discountRate', value: changeVal });
    }

    return <div>
        <select className="bg-white bg-opacity-75" defaultValue={discountRate} onChange={handleChange} >
            <option></option>
            {
                brokers.map(el => {
                    return <option key={el.label} value={el.discountRate}>
                        {el.label} [{el.discountRate}]
                    </option>
                })
            }
        </select>
    </div>
}