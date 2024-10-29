import Decimal from "decimal.js";
import StockData from "../(utils)/StockData";


export default function FeeInformation({ stockData, price, txnType, discountRate, amount, unit }) {
    // const TW_TAX_RATE = 0.001425;

    // function getBrokerFee(p) {
    //     const price = new Decimal(p * 1000);
    //     const fee = price.mul(TW_TAX_RATE).mul(discountRate);
    //     return fee.toNumber();
    // }

    // function getTaxFee(p) {
    //     const price = new Decimal(p * 1000);
    //     const tax = price.mul(txnType === 'spot' ? 0.003 : 0.0015).toNearest(2);
    //     return tax.toNumber();
    // }

    // function getBuyCost(p) {
    //     const price = new Decimal(p);
    //     const cost = price.mul(amount).mul(unit).add(getBrokerFee(p)).toNearest(2);
    //     return cost.toNumber();
    // }

    // function getSellRevenue(p) {
    //     const price = new Decimal(p * 1000);
    //     const revenue = price.minus(getBrokerFee(p)).minus(getTaxFee(p)).toNearest(2);
    //     return revenue.toNumber();
    // }

    function TransactionTaxInfo() {
        return <>
            <p className="w-1/3">證券交易稅</p>
            <p className="w-1/3"></p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">
                {stockData.getTaxFee(stockData.sell)}
            </output>
        </>
    }


    return <div className="flex flex-col border">

        <section className='flex text-red-500'>
            <p className="w-1/3">買進總價</p>
            <p className="w-1/3">{stockData.buy}*{stockData.amount * unit}</p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">{stockData.buyCost}</output>
        </section>

        <section className="flex flex text-red-500">
            <p className="w-1/3">券商手續費</p>
            <p className="w-1/3"></p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">
                {stockData.getbrokerFee(stockData.buy)}
            </output>
        </section>

        <section className='flex text-gray-400'>
            <p className="w-2/3">買進小計</p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">{stockData.buyCostWithFee}</output>
        </section>

        <section className='flex'>
            <p className="w-1/3">賣出總價</p>
            <p className="w-1/3">{stockData.sell}*{stockData.amount * stockData.unit}</p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">{stockData.sellRevenue}</output>
        </section>

        <section className="flex flex text-red-500">
            <p className="w-1/3">券商手續費</p>
            <p className="w-1/3"></p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">
                {stockData.getbrokerFee(stockData.buy)}
            </output>
        </section>

        <section className="flex flex text-red-500">
            <TransactionTaxInfo></TransactionTaxInfo>
        </section>

        <section className='flex text-gray-400'>
            <p className="w-2/3">賣出小計</p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">{stockData.sellRevenueWithFee}</output>
        </section>
    </div>
}