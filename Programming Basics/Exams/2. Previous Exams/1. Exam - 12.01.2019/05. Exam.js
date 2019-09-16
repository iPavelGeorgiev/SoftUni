function exam(input) {
    let candidates = Number(input.shift());
    let averageSuccess = 0;
    let topStudents = 0;
    let between4and5 = 0;
    let between3and4 = 0;
    let fail = 0;

    for (let i = 1; i <= candidates; i++) {
        let grade = Number(input.shift());

        if (grade < 3) {
            fail++;
        } else if (grade < 3.99) {
            between3and4++;
        } else if (grade < 4.99) {
            between4and5++;
        } else {
            topStudents++;
        }

        averageSuccess += grade;

    }

    averageSuccess /= candidates;

    console.log(`Top students: ${((topStudents / candidates) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((between4and5 / candidates) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((between3and4 / candidates) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fail / candidates) * 100).toFixed(2)}%`);
    console.log(`Average: ${averageSuccess.toFixed(2)}`);
}

exam(['10', '3', '2.99', '5.68', '3.01', '4', '4', '6', '4.5', '2.44', '5'])