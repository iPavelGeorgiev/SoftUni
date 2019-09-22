function bitcoinFarming(input) {
    let bitcoins = 0;
    let day = 1;
    let goldExchanged = 0;
    let firstBitcoin = 0;
    let calculate = 0;

    for (let i = 0; i < input.length; i++) {
        if (day % 3 == 0) {
            goldExchanged += (input[i] * 0.70) * 67.51
        } else {
            goldExchanged += input[i] * 67.51;
        }
        
        if (goldExchanged >= 11949.16) {
            calculate = Math.trunc(goldExchanged / 11949.16)
            goldExchanged -= 11949.16 * calculate;
            bitcoins += calculate;
        }

        if (bitcoins > 0 && firstBitcoin === 0) {
            firstBitcoin = day;
        }

        day++;
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${goldExchanged.toFixed(2)} lv.`);
}

bitcoinFarming([3124.15, 504.212, 2511.124])