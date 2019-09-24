function wrongResult(firstNum, secondNum, thirdNum) {
    let result = "";

    if (firstNum * secondNum * thirdNum >= 0) {
        result = "Positive";
    } else {
        result = "Negative";
    }

    console.log(result);
}

wrongResult(5, 12, -15)