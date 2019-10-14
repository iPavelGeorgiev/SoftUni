function largestNumber(...numbers) {
   let result = Math.max(...numbers);
   return `The largest number is ${result}.`;
}

console.log(
   largestNumber(5, -3, 16)
);