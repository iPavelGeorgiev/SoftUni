function graduate(input) {
    let name = input.shift();
    let counter = 1;
    let sum = 0;

    while (counter <= 12) {
        let grade = Number(input.shift());
        if (grade >= 4) {
            sum += grade;
            counter++;
        }
    }

    let average = sum / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
}

graduate(["Pesho", 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5])