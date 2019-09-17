function christmasMarket(input) {
    let moneyGoal = Number(input.shift())
    let moneyFromBooks = (Number(input.shift()) * 14.90) + (Number(input.shift()) * 9.80) + (Number(input.shift()) * 4.30);

    let MoneyAfterDDC = moneyFromBooks * 0.80;

    if (MoneyAfterDDC >= moneyGoal) {
        let bonus = Math.floor((MoneyAfterDDC - moneyGoal) * 0.10);
        console.log(`${(MoneyAfterDDC - bonus).toFixed(2)} leva donated.`);
        console.log(`Sellers will receive ${bonus} leva.`);
    } else {
        console.log(`${Math.abs(MoneyAfterDDC - moneyGoal).toFixed(2)} money needed.`);
    }
}

christmasMarket([200, 15, 10, 5])