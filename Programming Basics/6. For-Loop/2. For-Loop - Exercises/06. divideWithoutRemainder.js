function divideWithoutRemainder(input) {
    let n = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);

        if (number % 2 == 0) {
            p1Counter++
        }

        if (number % 3 == 0) {
            p2Counter++
        }

        if (number % 4 == 0) {
            p3Counter++
        }
    }

    let p1 = p1Counter / n * 100;
    let p2 = p2Counter / n * 100;
    let p3 = p3Counter / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}

divideWithoutRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])