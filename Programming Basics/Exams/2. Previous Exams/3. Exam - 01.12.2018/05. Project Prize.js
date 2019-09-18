function projectPrice(input) {
    let projectParts = Number(input.shift());
    let moneyPerPoint = Number(input.shift());
    let counter = 1;
    let totalPoints = 0;

    for (let i = 1; i <= projectParts; i++) {
        let points = Number(input.shift());

        if (counter % 2 == 0) {
            totalPoints += points * 2;
        } else {
            totalPoints += points;
        }
        counter++;
    }
    console.log(`The project prize was ${(moneyPerPoint * totalPoints).toFixed(2)} lv.`);
}

projectPrice(['7', '100.5', '2', '4', '5', '1', '1', '7', '3'])