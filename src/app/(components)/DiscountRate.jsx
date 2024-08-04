export default function DiscountRate({ onFeeDiscountChange }) {

    const brokers = [
        { label: '國泰證券', discountRate: 0.28 },
        { label: '富邦證券', discountRate: 0.18 }
    ];

    return <div>
        <select className="bg-white bg-opacity-75" onChange={(e) => onFeeDiscountChange(e)} >
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