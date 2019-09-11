function fishingBoat(input) {
    let budget = +(input.shift());
    let season = input.shift();
    let people = +(input.shift());
    let boatPrise = 0;
    let sum = 0;
    let discount = 0;
    switch (season) {
        case "Autumn":
        case "Summer": boatPrise = 4200;
            break;
        case "Spring": boatPrise = 3000;
            break;
        case "Winter": boatPrise = 2600;
    }

    if (people <= 6) {
        discount = 0.90;
    } else if (people > 6 && people <= 11) {
        discount = 0.85;
    } else {
        discount = 0.75;
    }

    sum = boatPrise * discount;

    if (season !== "Autumn" && people % 2 == 0) {
        sum *= 0.95;
    }

    budget >= sum ? console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`) : console.log(`Not enough money! You need ${(Math.abs(budget - sum)).toFixed(2)} leva.`);
}

fishingBoat([3000, "Summer", 11])