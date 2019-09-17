function pastryShop(input) {
    let dessert = input.shift();
    let num = Number(input.shift());
    let date = Number(input.shift());
    let price = 0;

    if (date <= 15) {
        switch (dessert) {
            case "Cake": price = 24 * num;
            break;
            case "Souffle": price = 6.66 * num;
            break;
            case "Baklava": price = 12.60 * num;
            break;
        }
    } else {
        switch (dessert) {
            case "Cake": price = 28.70 * num;
            break;
            case "Souffle": price = 9.80 * num;
            break;
            case "Baklava": price = 16.98 * num;
            break;
        }
    }

    if (date <= 22) {
        if (price >= 100 && price <= 200) {
            price *= 0.85;
        } else if (price > 200) {
            price *= 0.75;
        }
    }

    if (date <= 15) {
        price *= 0.90;
    }

    console.log(price.toFixed(2));
}

pastryShop(["Cake", 10, 15])