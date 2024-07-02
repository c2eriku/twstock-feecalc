"use client";
import { useState } from 'react';
import styled from 'styled-components';
import { step } from '../(utils)/twstockFeeRule';
import Decimal from 'decimal.js';

const height = '42px';

const Input = styled.input.attrs({ type: 'number' })`
    width:100%;
    height:${height};   
    padding: .2em;
    font-size:2em;
`;

const TooltipButton = styled.button.attrs({ type: 'button' })`
    background: #01B468;
    height: ${height};
    aspect-ratio:5/7;
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

    return <div className='flex items-end'>
        <TooltipButton onClick={() => handleClick(false)} style={{ borderRadius: '20% 0 0 20%' }}>-</TooltipButton>
        <Input value={price} onChange={handleChange}></Input>
        <TooltipButton onClick={() => handleClick(true)} style={{ borderRadius: '0 20% 20% 0' }}>+</TooltipButton>
    </div >

}