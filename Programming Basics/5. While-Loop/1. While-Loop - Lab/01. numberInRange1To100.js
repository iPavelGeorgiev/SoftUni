function numberInRange(input) {
    let num = Number(input.shift());

    while (num < 1 || num > 100) {
        console.log("Invalid number!");
        num = Number(input.shift());
    }

    console.log(`The number is: ${num}`);
}

numberInRange([105, 0, -200, 77])