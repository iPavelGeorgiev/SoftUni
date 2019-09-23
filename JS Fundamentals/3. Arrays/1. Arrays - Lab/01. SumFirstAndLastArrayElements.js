function SumFirstAndLastArrayElements(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.pop());

    console.log(firstNum + secondNum);
}

SumFirstAndLastArrayElements(['20', '30', '40'])