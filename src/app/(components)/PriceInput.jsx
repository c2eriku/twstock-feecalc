"use client";
import { useState } from 'react';
import { TwStockPrice } from '../(utils)/twstockFeeRule';
import { ArrowPathIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

const height = '42px';

export default function PriceInput({ value, title, type, dispatch }) {
    const [sync, setSync] = useState(false);

    function handleClick(action) {
        const p = action ? TwStockPrice(value).next() : TwStockPrice(value).prev();
        updateValue(p);
    }

    function handleChange(event) {
        updateValue(event.target.value);
    }

    function updateValue(updVal) {
        const typex = sync ? 'sync' : type;
        dispatch({ type: typex, value: updVal });
    }

    return <div>
        <div className='flex mb-2'>
            <label>{title}</label>
            <button className={`bg-gray-${sync ? '500' : '300'} text-white font-bold px-1 rounded ml-auto`} onClick={() => { setSync(!sync) }}>
                <ArrowPathIcon className='inline-block size-5'></ArrowPathIcon>
            </button>
        </div>

        <div className='flex items-end border border-slate-500 rounded-lg overflow-hidden'>
            <button dir="ltr" className='bg-gray-300 w-16'
                onClick={() => handleClick(false)} style={{ height: height }}>
                <MinusIcon className='inline-block size-6'></MinusIcon>
            </button>

            <input type="number" inputMode="decimal" className='p-1 w-full text-xl text-center' value={value} onChange={handleChange} style={{ height: height }}></input>

            <button dir="rtl" className='bg-gray-300 w-16'
                onClick={() => handleClick(true)} style={{ height: height }}>
                <PlusIcon className='inline-block size-6'></PlusIcon>
            </button>
        </div>
    </div>
}