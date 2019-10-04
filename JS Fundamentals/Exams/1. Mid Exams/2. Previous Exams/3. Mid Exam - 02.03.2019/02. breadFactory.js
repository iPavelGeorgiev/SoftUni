function breadFactory(input) {
    let energy = 100;
    let coins = 100
    let complete = true;

    let events = input.shift().split("|");

    for (let event of events) {
        event = event.split("-");
        let number = Number(event.pop())

        if (event[0] === "rest") {
            let energyGain = number;

            if (energy === 100) {
                energyGain = 0;
            } else if (energy + number > 100) {
                energyGain -= energyGain - 100;
                energy = 100;
            } else {
                energy += number;
            }

            console.log(`You gained ${energyGain} energy.`);
            console.log(`Current energy: ${energy}.`);
        } else if (event[0] === "order") {
            if (energy >= 30) {
                energy -= 30;
                coins += number
                console.log(`You earned ${number} coins.`);
            } else {
                energy += 50;
                console.log("You had to rest!");
            }
        } else {
            let ingredient = event[0];

            if (coins - number > 0) {
                coins -= number;
                console.log(`You bought ${ingredient}.`);
            } else {
                console.log(`Closed! Cannot afford ${ingredient}.`);
                complete = false;
                break;
            }
        }
    }

    if (complete) {
        console.log(`Day completed!\nCoins: ${coins}\nEnergy: ${energy}`);
    }
}

breadFactory(['rest-2|order-10|eggs-100|rest-10'])