import Decimal from "decimal.js";

export function getInterval(price) {
    if (price < 10) return 0.01;
    if (price < 50) return 0.05;
    if (price < 100) return 0.1;
    if (price < 500) return 0.5;
    if (price < 1000) return 1;
    return 5;
}

export function TwStockPrice(p) {
    const price = new Decimal(p);
    const interval = new Decimal(getInterval(p));


    function next() {
        const offset = price.mod(interval);
        const res = price.add(interval).minus(offset);
        return res.toNumber();
    }

    function prev() {
        const offset = price.mod(interval);
        let res;
        if (offset > 0) res = price.minus(offset);
        else res = price.minus(interval).add(offset);
        return res.toNumber();
    }


    return { next, prev }
}