function weddingInvestment(input) {
    let contractPeriod = input.shift();
    let contractType = input.shift();
    let dessert = input.shift();
    let contractMonths= Number(input.shift());
    let price = 0;

    if (contractPeriod == "one") {
        switch (contractType) {
            case "Small": price = 9.98;
            break;
            case "Middle": price = 19.99;
            break;
            case "Large": price = 25.98;
            break;
            case "ExtraLarge": price = 35.99;
            break;
        }
    } else if (contractPeriod == "two") {
        switch (contractType) {
            case "Small": price = 8.58;
            break;
            case "Middle": price = 17.09;
            break;
            case "Large": price = 23.59;
            break;
            case "ExtraLarge": price = 31.79;
            break;
        }
    }
    if (dessert == "yes") {
        if (price <= 10) {
            price += 5.50;
        } else if (price <= 30) {
            price += 4.35;
        } else if (price > 30) {
            price += 3.85;
        }
    }

    if (contractPeriod == "two") {
        price *= 0.9625;
    }

    price *= contractMonths;

    console.log(`${price.toFixed(2)} lv.`);
}

weddingInvestment(['one', 'Small', 'yes', '10'])