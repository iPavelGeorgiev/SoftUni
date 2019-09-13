function oddEvenSum(input) {
    let n = Number(input[0]);

    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);
        
        if (i % 2 == 0) {
            evenNumbers += number;
        } else {
            oddNumbers += number;
        }
    }

    if (evenNumbers == oddNumbers) {
        console.log(`Yes\nSum = ${evenNumbers}`);
    } else {
        let diff = Math.abs(evenNumbers - oddNumbers);
        console.log(`No\nDiff = ${diff}`);
    }
}

oddEvenSum([4, 10, 50 , 60 , 20])