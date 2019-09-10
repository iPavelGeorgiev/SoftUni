function greaterNumber(input) {
  let num1 = parseInt(input.shift());
  let num2 = parseInt(input.shift());

  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

greaterNumber([5, 3])