function vacation(input) {
    let neededMoney = Number(input.shift());
    let ownedMoney = Number(input.shift());

    let spendCounter= 0;
    let dayCounter = 0;
    let is = false;

    while (ownedMoney < neededMoney) {
        let command = input.shift();
        let money = Number(input.shift());
        dayCounter++;

        if (command == "spend") {
            ownedMoney -= money;
            spendCounter++;

            if(ownedMoney < 0) {
                ownedMoney = 0;
            }
        } else if (command == "save") {
            ownedMoney += money;
            spendCounter = 0;
        }

        if(spendCounter >= 5) {
            is = true;
            break;
        }
    }

    if (is) {
        console.log(`You can't save the money.\n${dayCounter}`);
    } else if (ownedMoney >= neededMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}

vacation([110, 60, "spend", 10, "spend", 10, "spend", 10, "spend", 10, "spend", 10])