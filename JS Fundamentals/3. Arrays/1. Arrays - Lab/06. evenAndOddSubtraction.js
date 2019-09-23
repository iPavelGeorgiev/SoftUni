function evenAndOddSubtraction(numbers) {
    let evenNumbers = 0
    let oddNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers += numbers[i];
        } else {
            oddNumbers += numbers[i];
        }
    }

    console.log(evenNumbers - oddNumbers);
}

evenAndOddSubtraction([1,2,3,4,5,6])