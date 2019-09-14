function equalSumsEvenOddPosition(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let print = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = i.toString();
        let odd = 0;
        let even = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);

            if (j % 2 == 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }

        if (odd == even) {
            print += `${currentNum} `;
        }
    }
    console.log(print);
}

equalSumsEvenOddPosition([100000, 100050])