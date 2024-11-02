"use client";
import { useState } from 'react';
import { TwStockPrice } from '../(utils)/twstockFeeRule';
import { ArrowPathIcon, MinusIcon, PlusIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/solid'

const height = '42px';

export default function PriceInput({ price, title, type, sync, dispatch }) {

    function handleFuncBtnClick(action) {
        const p = action ? TwStockPrice(price).next() : TwStockPrice(price).prev();
        updateValue(p);
    }

    function handleChange(event) {
        const changeVal = Number(event.target.value);
        updateValue(changeVal);
    }

    function updateValue(updVal) {
        const typex = sync ? 'sync' : type;
        dispatch({ type: typex, value: updVal });
    }

    return <div>
        <div className='flex mb-2'>
            <label>{title}</label>
        </div>

        <div className='flex items-end border-2 border-gray-200 rounded-lg overflow-hidden'>
            <button dir="ltr" className='bg-gray-300 border-2 border-gray-300 w-16'
                onClick={() => handleFuncBtnClick(false)} style={{ height: height }}>
                <MinusIcon className='inline-block size-6'></MinusIcon>
            </button>

            <input type="number" inputMode="decimal" className='p-1 w-full text-xl text-center' value={price} onChange={handleChange} style={{ height: height }}></input>

            <button dir="rtl" className='bg-gray-300 border-2 border-gray-300 w-16'
                onClick={() => handleFuncBtnClick(true)} style={{ height: height }}>
                <PlusIcon className='inline-block size-6'></PlusIcon>
            </button>
        </div>
    </div>
}