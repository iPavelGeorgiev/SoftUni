function spiceMustFlow(startingYield) {
    let totalAmount = 0;
    let consumedByWorkers = 26;
    let yieldDrop = 10;
    let days = 0;

    while (startingYield >= 100) {
        totalAmount += startingYield - consumedByWorkers;
        startingYield -= yieldDrop
        days++;
    }

    if (totalAmount >= 26) {
        totalAmount -= 26
    }

    console.log(days);
    console.log(totalAmount);
}

spiceMustFlow(111)