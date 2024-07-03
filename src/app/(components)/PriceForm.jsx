"use client";
import styled from 'styled-components';
import PriceInput from './PriceInput';
import FeeInfomation from './FeeInfomation';
import TxnTypeRadio from './TxnTypeRadio';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    padding: 1em;
    background: lightgrey;
`;

const Column = styled.div`
    flex: 0 0 50%;
    padding:.5em;
    background: lightgreen;
`

const Row = styled.div`
    background: lightyellow;
`

export default function PriceForm() {
    return <div className='grid grid-cols-2 gap-4 p-4'>
        <div>
            <label>買入</label>
            <PriceInput></PriceInput>
            <FeeInfomation></FeeInfomation>
        </div>
        <div>
            <label>買入</label>
            <PriceInput></PriceInput>
            <FeeInfomation></FeeInfomation>
        </div>
        <div className='col-span-2'>
            <TxnTypeRadio></TxnTypeRadio>
        </div>
    </div>
}