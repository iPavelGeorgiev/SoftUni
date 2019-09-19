function weddingDecoration(input) {
    let budget = Number(input.shift());
    let decoration = input.shift();
    let amount = Number(input.shift());
    let pBalloons = 0;
    let pFlowers = 0;
    let pCandles = 0;
    let pRibbon = 0;
    let moneySpend = 0;

    while (decoration != "stop") {
        switch (decoration) {
            case "balloons": moneySpend += amount * 0.1;
            pBalloons += amount
            break;
            case "flowers": moneySpend += amount * 1.5;
            pFlowers += amount
            break;
            case "candles": moneySpend += amount * 0.5;
            pCandles += amount
            break;
            case "ribbon": moneySpend += amount * 2;
            pRibbon += amount
            break;
        }

        if (moneySpend >= budget) {
            break;
        }

        decoration = input.shift();
        amount = Number(input.shift());
    }

    budget -= moneySpend;

    if (decoration == "stop") {
        console.log(`Spend money: ${moneySpend.toFixed(2)}`);
        console.log(`Money left: ${budget.toFixed(2)}`);
    } else {
        console.log("All money is spent!");
    }

    console.log(`Purchased decoration is ${pBalloons} balloons, ${pRibbon} m ribbon, ${pFlowers} flowers and ${pCandles} candles.`);
}

weddingDecoration(['30', 'flowers', '10', 'balloons', '20', 'candles', '10', 'ribbon', '8'])