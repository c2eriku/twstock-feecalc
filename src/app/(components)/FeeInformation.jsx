import Decimal from "decimal.js";
import StockData from "../(utils)/StockData";


export default function FeeInformation({ stockData }) {

    function TransactionTaxInfo() {
        return <>
            <p className="w-1/3">證券交易稅</p>
            <p className="w-1/3"></p>
            <output className="w-1/3 text-right px-2">
                {stockData.getTaxFee(stockData.sell)}
            </output>
        </>
    }


    return <div className="flex flex-col">

        <section className="my-2 p-2 rounded bg-blue-100">
            <div className="flex">
                <label className="w-1/3">買進總價</label>
                <output className="w-2/3 text-right px-2" aria-label="買進總價">
                    {stockData.buyCost}
                </output>
            </div>

            <div className="flex">
                <label className="w-1/3">券商手續費</label>
                <output className="w-2/3 text-right px-2" aria-label="券商手續費">
                    {stockData.getbrokerFee(stockData.buy)}
                </output>
            </div>

            <div className="flex">
                <label className="w-2/3">買進小計</label>
                <output className="w-2/3 text-right px-2" aria-label="買進小計">
                    {stockData.buyCostWithFee}
                </output>
            </div>
        </section>




        <section className="my-2 p-2 rounded bg-green-100">
            <div className="flex">
                <label className="w-1/3">賣出總價</label>
                <output className="w-2/3 text-right px-2">{stockData.sellRevenue}</output>
            </div>

            <div className="flex">
                <label className="w-1/3">券商手續費</label>
                <output className="w-2/3 text-right px-2">{stockData.getbrokerFee(stockData.buy)}</output>
            </div>

            <div className="flex">
                <TransactionTaxInfo />
            </div>

            <div className="flex">
                <label className="w-2/3">賣出小計</label>
                <output className="w-1/3 text-right px-2">{stockData.sellRevenueWithFee}</output>
            </div>
        </section>
    </div>
}