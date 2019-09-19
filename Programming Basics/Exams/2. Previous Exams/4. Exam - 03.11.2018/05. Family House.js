function familyHouse(input) {
    let months = Number(input.shift());
    let moneyElectricity = 0;
    let moneyWater = months * 20;
    let moneyInternet = months * 15;
    let others = 0;

    for (let i = 1; i <= months; i++) {
        electricityPerMonth = Number(input.shift());
        others += (electricityPerMonth + 15 + 20) + ((electricityPerMonth + 15 + 20) * 0.20);
        moneyElectricity += electricityPerMonth;
    }

    let averagePerMonth = (moneyElectricity + moneyWater + moneyInternet + others) / months;

    console.log(`Electricity: ${moneyElectricity.toFixed(2)} lv`);
    console.log(`Water: ${moneyWater.toFixed(2)} lv`);
    console.log(`Internet: ${moneyInternet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${averagePerMonth.toFixed(2)} lv`);
}

familyHouse(['5', '68.63', '89.25', '132.53', '93.53', '63.22'])