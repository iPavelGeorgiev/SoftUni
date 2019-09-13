function cleverLily(input) {
    let age = Number(input.shift());
    let washingMachinePrice = Number(input.shift());
    let toyPrice = Number(input.shift());

    let moneyYears = 0;
    let toyYears = 0;
    let money = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            toyYears++;
        } else if (i % 2 == 0) {
            moneyYears++;
            money += 10 * moneyYears;
        }
    }

    let toysSold = toyPrice * toyYears;
    let total = money + toysSold - moneyYears;

    if (total >= washingMachinePrice) {
        console.log(`Yes! ${(total - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(total - washingMachinePrice).toFixed(2)}`);
    }
}

cleverLily(['10', '170.00', '6'])