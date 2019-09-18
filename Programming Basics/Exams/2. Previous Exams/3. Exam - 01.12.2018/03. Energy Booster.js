function energyBooster(input) {
    let fruit = input.shift();
    let setSize = input.shift();
    let numSets = Number(input.shift());
    let packPrice = 0;

    if (setSize == "small") {
        switch (fruit) {
            case "Watermelon": packPrice = (2 * 56) * numSets;
            break;
            case "Mango": packPrice = (2 * 36.66) * numSets;
            break;
            case "Pineapple": packPrice = (2 * 42.10) * numSets;
            break;
            case "Raspberry": packPrice = (2 * 20) * numSets;
            break;
        }
    } else {
        switch (fruit) {
            case "Watermelon": packPrice = (5 * 28.70) * numSets;
            break;
            case "Mango": packPrice = (5 * 19.60) * numSets;
            break;
            case "Pineapple": packPrice = (5 * 24.80) * numSets;
            break;
            case "Raspberry": packPrice = (5 * 15.20) * numSets;
            break;
        }
    }

    if (packPrice >= 400 && packPrice <= 1000) {
        packPrice *= 0.85;
    } else if (packPrice > 1000) {
        packPrice *= 0.50;
    }

    console.log(`${packPrice.toFixed(2)} lv.`);
}

energyBooster(["Watermelon", "big", 4])