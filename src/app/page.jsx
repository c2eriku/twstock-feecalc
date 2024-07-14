"use client";
import { useState } from "react";
import FeeInfomation from "./(components)/FeeInfomation";
import PriceInput from "./(components)/PriceInput";
import TxnTypeRadio from "./(components)/TxnTypeRadio";
import FeeDiscount from "./(components)/FeeDiscountAutocomplete";


export default function Home() {
  const [type, setType] = useState('spot');
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);

  return (
    <main className="flex flex-col">
      <div className='grid grid-cols-2 gap-4 p-4'>
        <div>
          <label>買入{buyPrice}</label>
          <PriceInput onChange={setBuyPrice}></PriceInput>
          <FeeInfomation></FeeInfomation>
        </div>
        <div>
          <label>買入{sellPrice}</label>
          <PriceInput onChange={setSellPrice}></PriceInput>
          <FeeInfomation></FeeInfomation>
        </div>
        <div className='col-span-2'>
          <TxnTypeRadio onChange={(e) => setType(e.target.value)}></TxnTypeRadio>
        </div>
      </div>

      <FeeDiscount></FeeDiscount>
    </main>
  );
}