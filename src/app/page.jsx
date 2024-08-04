"use client";
import { useState } from "react";
import FeeInfomation from "./(components)/FeeInfomation";
import PriceInput from "./(components)/PriceInput";
import TxnTypeRadio from "./(components)/TxnTypeRadio";
import DiscountRate from "./(components)/DiscountRate";


export default function Home() {
  const [txnType, setTxnType] = useState('spot');
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [discountRate, setDiscountRate] = useState(1);

  return (
    <main className="flex flex-col">
      <nav class="flex items-center justify-center bg-teal-500 p-4">
        <DiscountRate
          onFeeDiscountChange={(e) => { setDiscountRate(e.target.value) }}></DiscountRate>
      </nav>


      <div className=' p-4'>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>買入價格</label>
            <PriceInput onChange={setBuyPrice}></PriceInput>
          </div>
          <div>
            <label>賣出價格</label>
            <PriceInput onChange={setSellPrice}></PriceInput>

          </div>
          <div className='col-span-2'>
            <TxnTypeRadio onChange={(e) => setTxnType(e.target.value)}></TxnTypeRadio>
          </div>
        </div>

        <div className="mt-2">
          <FeeInfomation buyPrice={buyPrice} sellPrice={sellPrice} txnType={txnType} discountRate={discountRate}></FeeInfomation>
        </div>
      </div>

    </main>
  );
}