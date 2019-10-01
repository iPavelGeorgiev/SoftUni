function distanceCalculator(input) {
    let stepsMade = Number(input.shift());
    let cmPerStep = Number(input.shift());
    let goal = Number(input.shift());
    let totalDistance = 0;

    let fifthStepLength = (cmPerStep - (cmPerStep * 0.30));

    for (let i = 1; i <= stepsMade; i++) {
        if (i % 5 === 0) {
            totalDistance += fifthStepLength;
        } else {
            totalDistance += cmPerStep;
        }
    }

    let percentage = (totalDistance / 100) / goal * 100
    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);
}

distanceCalculator([ '100', '2', '1' ])