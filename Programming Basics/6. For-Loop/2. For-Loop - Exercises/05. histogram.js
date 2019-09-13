function histogram(input) {
    let n = Number(input.shift());
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 0; i < n; i++) {
        let number = Number(input[i]);

        if (number < 200) {
            p1Counter++;
        } else if (number <= 399) {
            p2Counter++;
        } else if (number <= 599) {
            p3Counter++;
        } else if (number <= 799) {
            p4Counter++;
        } else if (number >= 800) {
            p5Counter++;
        }
    }

    let p1 = p1Counter / n * 100;
    let p2 = p2Counter / n * 100;
    let p3 = p3Counter / n * 100;
    let p4 = p4Counter / n * 100;
    let p5 = p5Counter / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram([3, 1, 2, 999])