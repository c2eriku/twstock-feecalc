import Decimal from "decimal.js";

export default class StockData {
    static TW_TAX_RATE = 0.001425;

    constructor(stockData) {
        Object.assign(this, stockData);
    }

    buy = 10;
    sell = 10;
    amount = 1;
    unit = 1000;
    discountRate = 1;
    txnType = 'spot';

    get buyCost() {
        const totalAmount = new Decimal(this.buy).mul(this.amount).mul(this.unit);
        return totalAmount.toNumber();
    }

    get buyCostWithFee() {
        const fee = this.getbrokerFee(this.buy);
        const cost = new Decimal(this.buyCost).add(fee).toNearest(2);
        return cost.toNumber();
    }

    get sellRevenue() {
        const totalAmount = new Decimal(this.sell).mul(this.amount).mul(this.unit);
        return totalAmount.toNumber();
    }

    get sellRevenueWithFee() {
        const fee = this.getbrokerFee(this.sell);
        const tax = this.getTaxFee(this.sell);
        const revenue = new Decimal(this.sellRevenue).minus(fee).minus(tax).toNearest(2);
        return revenue.toNumber();
    }

    getbrokerFee(p) {
        const price = new Decimal(p).mul(this.amount).mul(this.unit);
        const fee = price.mul(StockData.TW_TAX_RATE).mul(this.discountRate);
        return fee.toNumber();
    }

    getTaxFee() {
        const totalAmount = new Decimal(this.sell).mul(this.amount).mul(this.unit);
        const tax = totalAmount.mul(this.txnType === 'spot' ? 0.003 : 0.0015).toNearest(2);
        return tax.toNumber();
    }
}