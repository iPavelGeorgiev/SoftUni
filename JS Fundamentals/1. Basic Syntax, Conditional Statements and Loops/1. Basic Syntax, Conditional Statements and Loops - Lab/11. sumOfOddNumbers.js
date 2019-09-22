function sumOfOddNumbers(n) {
    let num = 1;
    let sum = 0;
    let counter = 0;

    while (counter < n) {
        if (num % 2 != 0) {
            console.log(num);
            counter++;
            sum += num;
        }

        num++;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5)