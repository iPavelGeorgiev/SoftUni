function numbers(input) {
    let number = input.shift();
    let rows = Number(number.charAt(0)) + Number(number.charAt(1));
    let columns = Number(number.charAt(0)) + Number(number.charAt(2));
    let actualNumber = Number(number);

    for (let r = 1; r <= rows; r++) {
        let output = "";
        for (let c = 1; c <= columns; c++) {
            if (actualNumber % 5 == 0) {
                actualNumber -= Number(number.charAt(0));
            } else if (actualNumber % 3 == 0) {
                actualNumber -= Number(number.charAt(1));
            } else {
                actualNumber += Number(number.charAt(2));
            }
            output += `${actualNumber} `;
        }
        console.log(output);
    }
}

numbers(["132"])