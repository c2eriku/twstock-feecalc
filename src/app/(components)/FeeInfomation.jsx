import Decimal from "decimal.js";


export default function FeeInfomation({ buyPrice, sellPrice, txnType, discountRate }) {
    const TW_TAX_RATE = 0.001425;

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

    return <div className="flex flex-col">

        <div>
            <div>買入成本</div>
            <span>{buyPrice} + {buyPrice}*0.1425%*{discountRate} = {getBuyCost(buyPrice)}</span>
            <span>{ }</span>
        </div>

        <div>
            <div>賣出成本</div>
            <span>{sellPrice} - {sellPrice}*0.1425%*{discountRate} - {getTaxFee(sellPrice)} = {getSellRevenue(sellPrice)}</span>
            <span>{ }</span>
        </div>

        <div>
            <div>收益</div>
            <span>{getSellRevenue(sellPrice) - getBuyCost(buyPrice)}</span>
        </div>


    </div>
}