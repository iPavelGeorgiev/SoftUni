function fuelMoney(distance, passangers, fuelPrice) {
    let neededFuel = (distance / 100) * 7;
    neededFuel += passangers * 0.100;
    let moneyForFuel = neededFuel * fuelPrice;

    console.log(`Needed money for that trip is ${moneyForFuel}lv.`)
}

fuelMoney(260, 9, 2.49)