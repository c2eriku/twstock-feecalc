"use client";
import { useReducer } from "react";
import PriceInput from "./(components)/PriceInput";
import TxnTypeRadio from "./(components)/TxnTypeRadio";
import DiscountRate from "./(components)/DiscountRate";
import FeeInformation from "./(components)/FeeInformation";
import CalcOutput from "./(components)/CalcOutput";
import AmountInput from "./(components)/AmountInput";
import StockData from "./(utils)/StockData";
import PricePanel from "./(components)/PricePanel";


export default function Home() {
  const [stockData, dispatch] = useReducer(stockDataReducer, new StockData());

  return (
    <main className="flex flex-col">
      <nav className="flex items-center justify-center bg-teal-500 p-4 gap-4">
        <DiscountRate
          discountRate={stockData.discountRate}
          dispatch={dispatch}></DiscountRate>
        <TxnTypeRadio
          txnType={stockData.txnType}
          dispatch={dispatch}></TxnTypeRadio>
      </nav>


      <div className='p-4'>
        <section>
          <PricePanel dispatch={dispatch} stockData={stockData}></PricePanel>
        </section>

        <div className='mt-4'>
          <AmountInput
            unit={stockData.unit}
            amount={stockData.amount}
            dispatch={dispatch}></AmountInput>
        </div>

        <div className="mt-2">
          <FeeInformation stockData={stockData}></FeeInformation>
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
    case 'txnType':
      stockData.txnType = action.value;
      break;
    case 'unit':
      stockData.unit = action.value;
      break;
    case 'discountRate':
      stockData.discountRate = action.value;
      break;
  }
  return new StockData(stockData);
}