function sortNumbers(num1, num2, num3) {
    let first = Math.max(num1, num2, num3);
    let third = Math.min(num1, num2, num3);
    let second = (num1 + num2 + num3) - (first + third);

    console.log(first);
    console.log(second);
    console.log(third);
        
}

sortNumbers(-2, 1, 3)