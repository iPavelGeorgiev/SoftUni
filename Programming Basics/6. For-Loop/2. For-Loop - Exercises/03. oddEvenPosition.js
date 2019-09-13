function oddEvenPosition(input) {
    let n = Number(input[0]);

    let oddMin = 1000000000.0;
    let oddMax = -1000000000.0;
    let oddSum = 0.00;

    let evenMin = 1000000000.0;
    let evenMax = -1000000000.0;
    let evenSum = 0.00;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);

        if (i % 2 !== 0) {
            oddSum += number;

            if (number < oddMin) {
                oddMin = number;
            }

            if (number > oddMax) {
                oddMax = number;
            }
        } else {
            evenSum += number;

            if (number < evenMin) {
                evenMin = number;
            }

            if (number > evenMax) {
                evenMax = number;
            }
        }
    }
    oddSum = oddSum.toFixed(2); oddMin = oddMin.toFixed(2); oddMax = oddMax.toFixed(2); evenSum = evenSum.toFixed(2); evenMin = evenMin.toFixed(2); evenMax = evenMax.toFixed(2);

    if (oddMin == 1000000000.0) {
        oddMin = "No";
        oddMax = "No";
    }

    if (evenMin == 1000000000.0) {
        evenMin = "No";
        evenMax = "No";
    }

    console.log(`OddSum=${oddSum},\nOddMin=${oddMin},\nOddMax=${oddMax},\nEvenSum=${evenSum},\nEvenMin=${evenMin},\nEvenMax=${evenMax}`)
}

oddEvenPosition([6, 2, 3, 5, 4, 2, 1])