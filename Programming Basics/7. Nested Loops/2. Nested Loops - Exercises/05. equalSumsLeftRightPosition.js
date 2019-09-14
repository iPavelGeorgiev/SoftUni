function equalSumsLeftRightPosition(input) {
    let firstNum = input.shift();
    let secondNum = input.shift();
    let print = ""

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = i.toString()
        let firstTwoDigits = 0;
        let middleDigit = 0;
        let lastTwoDigits = 0;
        
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);

            if (j == 0 || j == 1) {
                firstTwoDigits += currentDigit;
            }

            if (j == 2) {
                middleDigit += currentDigit;
            }

            if (j == 3 || j == 4) {
                lastTwoDigits += currentDigit;
            }
        }
        if (firstTwoDigits < lastTwoDigits) {
            firstTwoDigits += middleDigit;
        } else if (lastTwoDigits < firstTwoDigits) {
            lastTwoDigits += middleDigit;
        }

        if (firstTwoDigits == lastTwoDigits) {
            print += `${currentNum} `;
        }
    }
    
    console.log(print);
}

equalSumsLeftRightPosition([10000, 10100])