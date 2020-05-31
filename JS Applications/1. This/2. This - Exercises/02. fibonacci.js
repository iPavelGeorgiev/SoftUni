function getFibonator() {
   let previousNum = 0;
   let currNum = 1;

   return function () {
      let result = previousNum + currNum;
      previousNum = currNum;
      currNum = result

      return previousNum;
   }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
