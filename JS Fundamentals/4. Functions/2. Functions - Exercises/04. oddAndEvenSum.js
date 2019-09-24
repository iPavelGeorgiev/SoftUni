function oddAndEvenSum(num) {
    let strNum = String(num);
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < strNum.length; i++) {
        let intNum = Number(strNum[i]);

        if (intNum % 2 === 0) {
            evenSum += intNum;
        } else {
            oddSum += intNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)