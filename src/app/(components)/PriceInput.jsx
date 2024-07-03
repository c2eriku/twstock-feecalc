"use client";
import { useState } from 'react';
import styled from 'styled-components';
import { step } from '../(utils)/twstockFeeRule';
import Decimal from 'decimal.js';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

const height = '42px';

const Input = styled.input.attrs({ type: 'number' })`
    width:100%;
    height:${height};   
    padding: .2em;
    font-size:2em;
`;


export default function PriceInput() {
    const [price, setPrice] = useState(0);

    function handleClick(action) {
        const c = action ? 1 : -1;
        const upd = Decimal.add(price, Decimal.mul(step(price), c));
        console.log(upd)
        setPrice(upd);
    }

    function handleChange(event) {
        console.log(event.target.value)
        setPrice(event.target.value);
    }

    return <div className='flex items-end border border-slate-500 rounded-lg overflow-hidden'>


        <button dir="ltr" className='bg-sky-300'
            onClick={() => handleClick(false)} style={{ height: height }}>
            <MinusIcon className='size-6'></MinusIcon>
        </button>

        <Input value={price} onChange={handleChange}></Input>

        <button dir="rtl" className='bg-sky-300'
            onClick={() => handleClick(true)} style={{ height: height }}>
            <PlusIcon className='size-6'></PlusIcon>
        </button>


    </div >

}