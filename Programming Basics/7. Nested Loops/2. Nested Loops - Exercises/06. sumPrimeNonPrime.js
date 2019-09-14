function sumPrimeNonPrime(input) {
    let number = input.shift();
    let primeNumbers = 0;
    let nonPrimeNumbers = 0;

    while (number != "stop") {
        let counter = 0;
        number = +(number);

        if (number < 0) {
            console.log("Number is negative.");
            number = input.shift();
            continue;
        }

        if (number % number == 0) {
            counter++;
        }

        for (let i = 1; i <= 9; i++) {
            if (number % i == 0 && i != number) {
                counter++;
            }
        }

        if (counter == 2) {
            primeNumbers += number;
        } else {
            nonPrimeNumbers += number;
        }

        number = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`);

}

sumPrimeNonPrime(['3', '9', '0', '7', '19', '4', 'stop'])