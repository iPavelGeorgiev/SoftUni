function easterCozonacs(arr) {
    let budget = Number(arr.shift());

    let flourP = Number(arr.shift());
    let packEggsP = flourP * 0.75;
    let milk250P = (flourP * 1.25) * 0.25;
    
    let oneCozonacP = flourP + packEggsP + milk250P;

    let coloredEggs = 0;
    let countOfCozonacs = 0;

    while (budget - oneCozonacP >= 0) {
        budget -= oneCozonacP;
        countOfCozonacs++;
        coloredEggs += 3;

        if (countOfCozonacs % 3 === 0 && countOfCozonacs > 0) {
            coloredEggs -= countOfCozonacs - 2
            continue;
        }
    }

    console.log(`You made ${countOfCozonacs} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
}

easterCozonacs([ '20.50', '1.25' ])