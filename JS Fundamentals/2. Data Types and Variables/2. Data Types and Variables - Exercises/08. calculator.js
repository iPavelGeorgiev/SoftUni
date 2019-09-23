function calculator(firstNum, operator, secondNum) {
    let calculation = eval(firstNum + operator + secondNum);
    console.log(calculation.toFixed(2));
}

calculator(5, '+', 10)