function equalPairs(input) {
    let n = Number(input.shift());
    let lastSum = 0;
    let equal = true;
    let maxDiff = 0;

    for (let i = 1; i <= n; i++) {
        let numbersSum = Number(input.shift()) + Number(input.shift());

        if (i != 1) {
            diff = Math.abs(lastSum - numbersSum)
            if (diff > maxDiff) {
                maxDiff = diff;
            }

            if (lastSum != numbersSum) {
                equal = false;
            }
        }

        lastSum = numbersSum;
    }
    
    if (equal == true) {
        console.log(`Yes, value=${lastSum}`)
    } else {
        console.log(`No, maxdiff=${maxDiff}`)
    }
}

equalPairs([3, 1, 2, 0, 3, 4, -1])