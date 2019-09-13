function halfSumElement(input) {
    let n = Number(input.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let number = Number(input[i]);
        sum += number;

        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    sum -= maxNumber;

    if (sum == maxNumber) {
        console.log(`Yes\nSum = ${maxNumber}`);
    } else {
        let diff = Math.abs(maxNumber - sum);
        console.log(`No\nDiff = ${diff}`);
    }
}

halfSumElement([7, 3, 4, 1, 1, 2, 12, 1])