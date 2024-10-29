"use client";
import { useReducer, useState } from "react";
import PriceInput from "./(components)/PriceInput";
import TxnTypeRadio from "./(components)/TxnTypeRadio";
import DiscountRate from "./(components)/DiscountRate";
import FeeInformation from "./(components)/FeeInformation";
import CalcOutput from "./(components)/CalcOutput";
import AmountInput from "./(components)/AmountInput";
import StockData from "./(utils)/StockData";


export default function Home() {
  const [txnType, setTxnType] = useState('spot');
  const [discountRate, setDiscountRate] = useState(1);
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState(1000);

  const [stockData, dispatch] = useReducer(stockDataReducer, new StockData());

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
            <PriceInput title={'買入價格'} type='buy' dispatch={dispatch} value={stockData.buy}></PriceInput>
          </div>
          <div>
            <PriceInput title={'賣出價格'} type='sell' dispatch={dispatch} value={stockData.sell}></PriceInput>
          </div>
        </div>

        <div className='mt-2'>
          <AmountInput
            amount={amount}
            unit={unit}
            setAmount={setAmount}
            setUnit={setUnit}
            dispatch={dispatch}></AmountInput>
        </div>

        <div className="m-2">
          <FeeInformation
            stockData={stockData}
            price={stockData.buy}
            txnType={txnType}
            discountRate={discountRate}
            amount={amount}
            unit={unit}
          ></FeeInformation>
          <CalcOutput stockData={stockData}></CalcOutput>
        </div>
      </div>
    </main>
  );
}

function stockDataReducer(stockData, action) {
  switch (action.type) {
    case 'buy':
      stockData.buy = action.value;
      break;
    case 'sell':
      stockData.sell = action.value;
      break;
    case 'sync':
      stockData.buy = action.value;
      stockData.sell = action.value;
      break;
    case 'amount':
      stockData.amount = action.value;
      break;
    case 'unit':
      stockData.unit = action.value;
      break;
  }
  return new StockData(stockData);
}