function numberModification(input) {
    let number = String(input).split("")
    let length = number.length;
    let counter = 0;
    let sum = 0;

    for (let digit of number) {
        digit = Number(digit);
        counter++;

        sum += digit;

        if (sum / counter > 5) {
            break;
        } else if (counter >= length) {
            number.push(9);
        }
    }

    console.log(number.join(""));
}

numberModification(101)