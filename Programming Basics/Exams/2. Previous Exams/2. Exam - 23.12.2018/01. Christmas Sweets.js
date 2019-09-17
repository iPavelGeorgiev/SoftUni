function christmasSweets(input) {
    let baklavaPriceKG = Number(input.shift());
    let muffinsPriceKG = Number(input.shift());
    let stollenKG = Number(input.shift());
    let candyKG = Number(input.shift());
    let biscuitsKG = Number(input.shift());

    let stollenPrice = (baklavaPriceKG * 1.60) * stollenKG;
    let candyPrice = (muffinsPriceKG * 1.80) * candyKG;
    let BiscuitsPrice = biscuitsKG * 7.50;

    let total = stollenPrice + candyPrice + BiscuitsPrice;

    console.log(total.toFixed(2));

}

christmasSweets(['6.90', '4.20', '1.5', '2.5', '1'])