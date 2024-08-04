"use client";
import { useReducer, useState } from "react";
import FeeInfomation from "./(components)/FeeInfomation";
import PriceInput from "./(components)/PriceInput";
import TxnTypeRadio from "./(components)/TxnTypeRadio";
import DiscountRate from "./(components)/DiscountRate";


export default function Home() {
  const [txnType, setTxnType] = useState('spot');
  const [discountRate, setDiscountRate] = useState(1);

  const [price, dispatch] = useReducer(priceReducer, { buy: 0, sell: 0 });

  return (
    <main className="flex flex-col">
      <nav className="flex items-center justify-center bg-teal-500 p-4">
        <DiscountRate
          onFeeDiscountChange={(e) => { setDiscountRate(e.target.value) }}></DiscountRate>
      </nav>


      <div className='p-4'>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <PriceInput title={'買入價格'} type='buy' dispatch={dispatch} value={price.buy}></PriceInput>
          </div>
          <div>
            <PriceInput title={'賣出價格'} type='sell' dispatch={dispatch} value={price.sell}></PriceInput>
          </div>
          <div className='col-span-2'>
            <TxnTypeRadio onChange={(e) => setTxnType(e.target.value)}></TxnTypeRadio>
          </div>
        </div>

        <div className="mt-2">
          <FeeInfomation buyPrice={price.buy} sellPrice={price.sell} txnType={txnType} discountRate={discountRate}></FeeInfomation>
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