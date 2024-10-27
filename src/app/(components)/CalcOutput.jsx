import Decimal from "decimal.js";

export function CalcOutput({ price, txnType, discountRate }) {
    console.log(price)
    const TW_TAX_RATE = 0.1425;

    function getBrokerFee(p) {
        const price = new Decimal(p * 1000);
        const fee = price.mul(TW_TAX_RATE).mul(discountRate);
        return fee.toNumber();
    }

    function getTaxFee(p) {
        const price = new Decimal(p * 1000);
        const tax = price.mul(txnType === 'spot' ? 0.003 : 0.0015).toNearest(1);
        return tax.toNumber();
    }

    function getBuyCost(p) {
        const price = new Decimal(p * 1000);
        const cost = price.add(getBrokerFee(p)).toNearest(1);
        return cost.toNumber();
    }

    function getSellRevenue(p) {
        const price = new Decimal(p * 1000);
        const revenue = price.minus(getBrokerFee(p)).minus(getTaxFee(p)).toNearest(1);
        return revenue.toNumber();
    }

    return <section className="flex">
        <p className="w-1/3">收益</p>
        
    </section>
}