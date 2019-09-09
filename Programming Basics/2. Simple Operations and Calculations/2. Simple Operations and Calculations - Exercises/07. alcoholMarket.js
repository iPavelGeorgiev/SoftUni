function alcoholMarket(input) {
    let whiskeyInBGN = Number(input.shift());
    let beerQuantity = Number(input.shift());
    let wineQuantity = Number(input.shift());
    let rakiyaQuantity = Number(input.shift());
    let whiskeyQuantity = Number(input.shift()); 1
    let rakiyaPrice = 0.5 * whiskeyInBGN;
    let winePrice = rakiyaPrice - (0.4 * rakiyaPrice);
    let beerPrice = rakiyaPrice - (0.8 * rakiyaPrice); 1
    let totalBeerPrice = beerQuantity * beerPrice;
    let totalWhiskeyPrice = whiskeyQuantity * whiskeyInBGN;
    let totalWinePrice = wineQuantity * winePrice;
    let totalRakiyaPrice = rakiyaQuantity * rakiyaPrice;
    let totalSum = totalRakiyaPrice + totalWinePrice + totalBeerPrice + totalWhiskeyPrice;
    console.log(totalSum.toFixed(2));
}

alcoholMarket(['50', '10', '3.5', '6.5', '1'])