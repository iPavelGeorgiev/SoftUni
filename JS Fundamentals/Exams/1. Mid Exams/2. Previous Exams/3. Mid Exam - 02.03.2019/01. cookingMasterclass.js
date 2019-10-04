function cookingMasterclass(input) {
    let budget = Number(input.shift())
    let students = Number(input.shift());
    let packageFlourPrice = Number(input.shift());
    let oneEggPrice = Number(input.shift());
    let singleApronPrice = Number(input.shift());

    let totalFlourPrice = packageFlourPrice * (students - Math.trunc(students / 5));

    let totalEggsPrice = (oneEggPrice * 10) * students;

    let totalApronsPrice = singleApronPrice * (Math.ceil(students * 1.20));

    let costOfItems = (totalFlourPrice + totalEggsPrice + totalApronsPrice);

    if (costOfItems <= budget) {
        console.log(`Items purchased for ${costOfItems.toFixed(2)}$.`);
    } else {
        let neededMoney = Math.abs(budget - costOfItems).toFixed(2);

        console.log(`${neededMoney}$ more needed.`);
    }
}

cookingMasterclass([ '100', '25', '4.0', '1.0', '6.0' ])