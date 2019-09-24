function carWash(commands) {
    let carCleaned = 0;

    for (let command of commands) {
        switch (command) {
            case "soap":
                carCleaned += 10;
                break;
            case "water":
                carCleaned *= 1.20;
                break;
            case "vacuum cleaner":
                carCleaned *= 1.25;
                break;
            case "mud":
                carCleaned *= 0.90;
                break;
        }
    }

    console.log(`The car is ${carCleaned.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])