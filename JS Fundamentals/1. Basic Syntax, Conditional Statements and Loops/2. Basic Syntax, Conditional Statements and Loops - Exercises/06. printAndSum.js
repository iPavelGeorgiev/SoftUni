function printAndSum(firstNum, lastNum) {
    let totalSum = 0;
    let print = ``;
    for (let i = firstNum; i <= lastNum; i++) {
        print += `${i} `;
        totalSum += i;
    }

    console.log(print);
    console.log(`Sum: ${totalSum}`);
}

printAndSum(5, 10)