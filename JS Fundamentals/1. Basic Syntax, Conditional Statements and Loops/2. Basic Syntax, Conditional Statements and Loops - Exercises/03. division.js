function division(number) {
    let divisibleNum = 0;
    for (let i = 10; i >= 2; i--) {
        if (number % i == 0) {
            if (i == 10 || i == 7 || i == 6 || i == 3 || i == 2) {
                divisibleNum = i;
                break;
            }
        }
    }

    if (divisibleNum != 0) {
        console.log(`The number is divisible by ${divisibleNum}`);
    } else {
        console.log("Not divisible");
    }
}

division(1643)