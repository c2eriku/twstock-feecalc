import { useState } from "react";
import PriceInput from "./PriceInput";
import SyncButton from "./SyncButton";


export default function PricePanel({ stockData, dispatch }) {

    const [sync, setSync] = useState(false);

    function updatePrice(event, type) {
        const typex = sync ? 'sync' : type;
        dispatch({ type: typex, value: event });
    }

    return <div className="flex justify-between">
        <div className='w-5/12'>
            <PriceInput
                title={'買入價格'}
                onchange={(e) => updatePrice(e, 'buy')}
                price={stockData.buy}></PriceInput>
        </div>

        <div className="mx-2 mt-6 flex">
            
            <SyncButton sync={sync} setSync={setSync}></SyncButton>
        </div>

        <div className='w-5/12'>
            <PriceInput
                title={'賣出價格'}
                onchange={(e) => updatePrice(e, 'sell')}
                price={stockData.sell}></PriceInput>
        </div>
    </div>;
}
