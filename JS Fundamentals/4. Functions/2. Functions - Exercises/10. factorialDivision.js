function factorialDivision(num1, num2) {
    let firstFactorial = function (firstNum) {
        if (firstNum <= 0) { // terminal case
            return true;
        } else { // block to execute
            return (firstNum * firstFactorial(firstNum - 1));
        }
    };

    let secondFactorial = function (secondNum) {
        if (secondNum <= 0) { // terminal case
            return true;
        } else { // block to execute
            return (secondNum * secondFactorial(secondNum - 1));
        }
    };

    console.log((firstFactorial(num1) / secondFactorial(num2)).toFixed(2));
}

factorialDivision(5, 2)