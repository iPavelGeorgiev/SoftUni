function graduatePart2(input) {
    let name = input.shift();
    let counter = 1;
    let sum = 0;
    let excluded = 0;

    while (counter <= 12) {
        let grade = Number(input.shift());
        if (grade >= 4) {
            sum += grade;
            counter++
        } else if (grade < 4) {
            excluded++
        }

        if (excluded == 2) {
            break;
        }
    }
    
    if (counter < 12) {
        console.log(`${name} has been excluded at ${counter} grade`);
    } else {
    let average = sum / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
}
}

graduatePart2(["Gosho", 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5])