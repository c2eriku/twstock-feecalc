"use client";
import { useState } from 'react';
import { TwStockPrice } from '../(utils)/twstockFeeRule';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

const height = '42px';

export default function PriceInput({ onChange }) {
    const [price, setPrice] = useState(0);

    function handleClick(action) {
        const p = action ? TwStockPrice(price).next() : TwStockPrice(price).prev();
        setPrice(p);
        onChange(p);
    }

    function handleChange(event) {
        setPrice(event.target.value);
        onChange(event.target.value);
    }

    return <div>
        <div className='flex items-end border border-slate-500 rounded-lg overflow-hidden'>
            <button dir="ltr" className='bg-gray-300 w-16'
                onClick={() => handleClick(false)} style={{ height: height }}>
                <MinusIcon className='inline-block size-6'></MinusIcon>
            </button>

            <input type="number"  inputmode="decimal" className='p-1 w-full text-xl text-center' value={price} onChange={handleChange} style={{ height: height }}></input>

            <button dir="rtl" className='bg-gray-300 w-16'
                onClick={() => handleClick(true)} style={{ height: height }}>
                <PlusIcon className='inline-block size-6'></PlusIcon>
            </button>
        </div>
    </div>
}