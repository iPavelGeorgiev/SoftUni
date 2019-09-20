function shoppingTime(input) {
    let breakTime = Number(input.shift());
    let hardwarePrice = Number(input.shift());
    let softwarePrice = Number(input.shift());
    let whiteFrappePrice = Number(input.shift());

    let purchaseTimeFrappe = breakTime - 5;
    let purchaseTimeHardware = 3 * 2;
    let purchaseTimeSoftware = 2 * 2;
    let restTime = purchaseTimeFrappe - (purchaseTimeHardware + purchaseTimeSoftware);
    let moneyForHardware = 3 * hardwarePrice;
    let moneyForPrograms = 2 * softwarePrice;
    let totalSpend = moneyForHardware + moneyForPrograms + whiteFrappePrice;

    console.log(totalSpend.toFixed(2));
    console.log(restTime);
}

shoppingTime([35, 2.50, 1.20, 6.30])