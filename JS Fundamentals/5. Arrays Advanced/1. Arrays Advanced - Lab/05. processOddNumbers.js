function processOddNumbers(input) {
    let oddNums = [];

    input.forEach((element, index) => {
        if (index % 2 != 0) {
            oddNums.push(element * 2);
        }
    });

    console.log(oddNums.reverse().join(" "));
}

processOddNumbers([10, 15, 20, 25])