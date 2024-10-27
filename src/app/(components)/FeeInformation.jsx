import Decimal from "decimal.js";


export default function FeeInformation({ mode, price, txnType, discountRate }) {
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


    function TransactionTaxInfo() {
        if (mode === 'buy') return;
        return <>
            <p className="w-1/3">證券交易稅</p>
            <p className="w-1/3">{price}*{txnType === 'spot' ? 0.3 : 0.15}%*{discountRate}</p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">
                {getTaxFee(price)}
            </output>
        </>
    }

    return <div className="flex flex-col border">

        <section className={`flex ${mode === 'buy' ? 'text-red-500' : ''}`}>
            <p className="w-1/3">交易總額</p>
            <p className="w-1/3">{price}*1000股</p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">{price * 1000}</output>
        </section>

        <section className="flex flex text-red-500">
            <p className="w-1/3">券商手續費</p>
            <p className="w-1/3">{price}*0.1425%*{discountRate}</p>
            <output className="w-1/3 text-right px-2 before:content-['='] before:px-2">
                {getBrokerFee(price)}
            </output>
        </section>

        <section className="flex flex text-red-500">
            <TransactionTaxInfo></TransactionTaxInfo>
        </section>
    </div>
}