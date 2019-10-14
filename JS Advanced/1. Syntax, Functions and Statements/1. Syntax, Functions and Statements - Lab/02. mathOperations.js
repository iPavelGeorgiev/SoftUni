function mathOperations(firstNum, secondNum, operator) {
   let operations = {
      "+": firstNum + secondNum,
      "-": firstNum - secondNum,
      "*": firstNum * secondNum,
      "/": firstNum / secondNum,
      "%": firstNum % secondNum,
      "**": firstNum ** secondNum
   }

   return operations[operator];
}

console.log(
   mathOperations(5, 6, '+')
);