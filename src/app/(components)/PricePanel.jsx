import { useState } from "react";
import PriceInput from "./PriceInput";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

export default function PricePanel({ stockData, dispatch }) {

    const [sync, setSync] = useState(false);

    return <div className="flex">
        <div className='w-auto'>
            <PriceInput
                title={'買入價格'}
                type='buy'
                sync={sync}
                dispatch={dispatch}
                price={stockData.buy}></PriceInput>
        </div>

        <div className="mx-2 mt-6 flex">
            <SyncButton sync={sync} setSync={setSync}></SyncButton>
        </div>

        <div className='w-auto'>
            <PriceInput
                title={'賣出價格'}
                type='sell'
                sync={sync}
                dispatch={dispatch}
                price={stockData.sell}></PriceInput>
        </div>
    </div>;
}


function SyncButton({ sync, setSync }) {

    function handleClick() {
        setSync(!sync);
    }

    return <button className={`
        ${sync ? '' : 'text-white'}
        w-8 stroke-gray-500`}
        onClick={handleClick}>
        <ArrowsRightLeftIcon></ArrowsRightLeftIcon>
    </button>
}