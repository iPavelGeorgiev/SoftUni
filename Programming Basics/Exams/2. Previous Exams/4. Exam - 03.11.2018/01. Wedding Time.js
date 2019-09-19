function weddingTime(input) {
    let priceWhiskey = Number(input.shift());
    let amountWater = Number(input.shift());
    let amountWine = Number(input.shift());
    let amountChampagne = Number(input.shift());
    let amountWhiskey = Number(input.shift());

    let champagnePrice = (priceWhiskey * 0.5)
    let champagne = champagnePrice * amountChampagne
    let wine = (champagnePrice * 0.4) * amountWine
    let water = (champagnePrice * 0.1) * amountWater;
    let whiskey = priceWhiskey * amountWhiskey;

    let total = (champagne + wine + water + whiskey).toFixed(2);

    console.log(total);
}

weddingTime([50, 10, 3.5, 6.5, 1])