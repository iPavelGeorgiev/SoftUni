function processOddNumbers(arr) {
   return arr
      .filter((value, i) => i % 2 === 1)
      .map(value => value * 2)
      .reverse()
      .join(" ");
}

console.log(processOddNumbers(
   [10, 15, 20, 25]
));