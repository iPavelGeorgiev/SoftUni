function cookingByNumbers(arr) {
   let number = Number(arr.shift());
   let output = [];

   arr.forEach(operation => {
      switch(operation) {
         case "chop": number /= 2; break;
         case "dice": number = Math.sqrt(number); break;
         case "spice": number += 1; break;
         case "bake": number *= 3; break;
         case "fillet": number = number - (number * 0.20); break;
      }

      output.push(number);
   })

   return output.join("\n");
}

console.log(
   cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
);