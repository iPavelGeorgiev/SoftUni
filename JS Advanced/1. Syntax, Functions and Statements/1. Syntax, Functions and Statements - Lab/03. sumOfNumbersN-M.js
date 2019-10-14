function sumOfNumbersN_M(n, m) {
   let totalSum = 0;

   for (let i = +n; i <= +m; i++) {
      totalSum += i;
   }

   return totalSum
}

console.log(
   sumOfNumbersN_M('-8', '20')
);