function goingHome(input) {
    let distanceInKilometers = Number(input.shift());
    let price100kmPetrol = Number(input.shift());
    let pricePetrol1L = Number(input.shift());
    let moneyFromTournament = Number(input.shift());

    let carBurnout = distanceInKilometers * price100kmPetrol / 100;
    let totalSum = carBurnout * pricePetrol1L;
    let moneyLeft = moneyFromTournament - totalSum;

    if (moneyLeft >= 0) {
        console.log(`You can go home. ${moneyLeft.toFixed(2)} money left.`);
    } else {
        let splitMoney = moneyFromTournament / 5;
        console.log(`Sorry, you cannot go home. Each will receive ${splitMoney.toFixed(2)} money.`);
    }
}

goingHome([100, 5, 1.2, 6])