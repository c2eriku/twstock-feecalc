"use client";
import { useReducer, useState } from "react";
import PriceInput from "./(components)/PriceInput";
import TxnTypeRadio from "./(components)/TxnTypeRadio";
import DiscountRate from "./(components)/DiscountRate";
import FeeInformation from "./(components)/FeeInformation";
import { CalcOutput } from "./(components)/CalcOutput";
import { Price } from "./(utils)/Price";


export default function Home() {
  const [txnType, setTxnType] = useState('spot');
  const [discountRate, setDiscountRate] = useState(1);

  const [price, dispatch] = useReducer(priceReducer, new Price());

  return (
    <main className="flex flex-col">
      <nav className="flex items-center justify-center bg-teal-500 p-4 gap-4">
        <DiscountRate
          onFeeDiscountChange={(e) => { setDiscountRate(e.target.value) }}></DiscountRate>
        <TxnTypeRadio onChange={(e) => setTxnType(e.target.value)}></TxnTypeRadio>
      </nav>


      <div className='p-4'>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <PriceInput title={'買入價格'} type='buy' dispatch={dispatch} value={price.buy}></PriceInput>
          </div>
          <div>
            <PriceInput title={'賣出價格'} type='sell' dispatch={dispatch} value={price.sell}></PriceInput>
          </div>
        </div>

        <div className="m-2">
          <FeeInformation mode='buy' price={price.buy} txnType={txnType} discountRate={discountRate}></FeeInformation>
          <FeeInformation mode='sell' price={price.sell} txnType={txnType} discountRate={discountRate}></FeeInformation>
          <CalcOutput price={price} txnType={txnType} discountRate={discountRate}></CalcOutput>
        </div>
      </div>
    </main>
  );
}

function priceReducer(price, action) {
  switch (action.type) {
    case 'buy':
      price.buy = action.value;
      break;
    case 'sell':
      price.sell = action.value;
      break;
    case 'sync':
      price.buy = action.value;
      price.sell = action.value;
  }
  return { ...price };
}