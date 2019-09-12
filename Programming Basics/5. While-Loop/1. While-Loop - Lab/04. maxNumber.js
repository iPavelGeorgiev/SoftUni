function maxNumber(input) {
    let n = Number(input.shift());
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let counter = 0;

    while (counter < n) {
        number = Number(input.shift());

        if (number > biggestNumber) {
            biggestNumber = number;
        }
        
        counter++;
    }
    console.log(biggestNumber);
}

maxNumber([2, 100, 99])