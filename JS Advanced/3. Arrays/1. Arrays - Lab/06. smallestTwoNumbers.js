function smallestTwoNumbers(input) {
   let smallestNum = (arr) => arr.splice(arr.indexOf(Math.min(...arr)), 1);
   let array = input.slice();
   let firstNum = smallestNum(array);
   let secondNum = smallestNum(array);

   return (`${firstNum} ${secondNum}`);
}

console.log(smallestTwoNumbers(
   [30, 15, 50, 5]
));