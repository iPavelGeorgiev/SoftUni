function equalNumbers(input) {
  let num1 = Number(input.shift());
  let num2 = Number(input.shift());
  let num3 = Number(input.shift());

  if (num1 == (num2 + num3) - num1) {
    console.log("yes")
  } else {
    console.log("no")
  }
}

equalNumbers([1, 1, 1])