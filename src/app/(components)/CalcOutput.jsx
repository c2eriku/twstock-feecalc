import Decimal from "decimal.js";

export default function CalcOutput({ stockData }) {

    function getResult() {
        const res = new Decimal(stockData.sellRevenueWithFee).minus(stockData.buyCostWithFee);
        return res.toNumber();
    }

    return <section className="flex">
        <p className="w-1/3">收益</p>
        <p className="w-2/3 text-right p-2">{getResult()}</p>
    </section>
}