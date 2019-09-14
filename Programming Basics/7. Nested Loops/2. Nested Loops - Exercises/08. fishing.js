function fishing(input) {
    let quota = Number(input.shift());
    let fishName = input.shift();
    let fishWeight = Number(input.shift());
    let fishesCaught = 0;
    let moneyWon = 0;
    let moneyLost = 0
    let finalPaycheck = 0;

    while (fishName != "Stop") {
        fishesCaught++;
        let fishPrice = 0;

        for (let i = 0; i < fishName.length; i++) {
            fishPrice += fishName.charCodeAt(i);
        }

        if (fishesCaught % 3 == 0) {
            moneyWon += (fishPrice / fishWeight);
        } else {
            moneyLost += (fishPrice / fishWeight);
        }

        if (fishesCaught >= quota) {
            console.log("Lyubo fulfilled the quota!");
            break;
        }

        fishName = input.shift();
        fishWeight = Number(input.shift());
    }

    finalPaycheck = moneyWon - moneyLost;

    if (finalPaycheck >= 0) {
        console.log(`Lyubo's profit from ${fishesCaught} fishes is ${finalPaycheck.toFixed(2)} leva.`);
    } else {
        console.log(`Lyubo lost ${Math.abs(finalPaycheck).toFixed(2)} leva today.`);
    }
}

fishing(['3', 'catfish', '70', 'carp', '20', 'tench', '14'])