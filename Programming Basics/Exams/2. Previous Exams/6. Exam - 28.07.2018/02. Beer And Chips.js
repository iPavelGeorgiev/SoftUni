function beerAndChips(input) {
    let fanName = input.shift();
    let budget = Number(input.shift());
    let numOfBeerBottles = Number(input.shift());
    let numOfChipsPackages = Number(input.shift());

    let totalBeersPrice = 1.20 * numOfBeerBottles;
    let oneChipsPrice = totalBeersPrice * 0.45;
    let totalChipsPrice = Math.ceil(oneChipsPrice * numOfChipsPackages);
    let totalSum = totalBeersPrice + totalChipsPrice;
    let moneyLeft = budget - totalSum;

    if (totalSum <= budget) {
        console.log(`${fanName} bought a snack and has ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`${fanName} needs ${Math.abs(moneyLeft).toFixed(2)} more leva!`);
    }
}

beerAndChips(['George', '10', '2', '3'])