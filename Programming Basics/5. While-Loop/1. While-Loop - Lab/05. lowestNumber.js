function lowestNumber(input) {
    let n = Number(input.shift());
    let lowestNumber = Number.MAX_SAFE_INTEGER;
    let counter = 0;

    while (counter < n) {
        number = Number(input.shift());

        if (number < lowestNumber) {
            lowestNumber = number;
        }

        counter++;
    }
    console.log(lowestNumber);
}

lowestNumber([2, 100, 99])