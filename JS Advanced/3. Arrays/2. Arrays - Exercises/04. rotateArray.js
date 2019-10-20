function rotateArray(input) {
   let array = input.slice();
   let amountRotations = Number(array.pop()) % array.length;

   for (let i = 0; i < amountRotations; i++) {
      array.unshift(array.pop());
   }

   return array.join(" ");
}

console.log(rotateArray(
   ['1', '2', '3', '4', '2']
));