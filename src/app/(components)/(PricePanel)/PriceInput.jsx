"use client";
import { useRef, useState } from 'react';
import { TwStockPrice } from '../../(utils)/twstockFeeRule';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

const height = '42px';

export default function PriceInput({ price, title, sync, dispatch, onchange }) {

    const inputRef = useRef(null);

    function handleFocus() {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }

    function handleFuncBtnClick(action) {
        const resPrice = action ? TwStockPrice(price).next() : TwStockPrice(price).prev();
        onchange(resPrice);
    }

    function handleChange(event) {
        const value = event.target.value;
        const valueNum = Number(value);
        onchange(valueNum);
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

            <input ref={inputRef} type="number" inputMode="decimal" className='p-1 w-full text-xl text-center'
                value={price}
                onFocus={handleFocus}
                onChange={handleChange} style={{ height: height }}></input>

            <button dir="rtl" className='bg-gray-300 border-2 border-gray-300 w-16'
                onClick={() => handleFuncBtnClick(true)} style={{ height: height }}>
                <PlusIcon className='inline-block size-6'></PlusIcon>
            </button>
        </div>
    </div>
}