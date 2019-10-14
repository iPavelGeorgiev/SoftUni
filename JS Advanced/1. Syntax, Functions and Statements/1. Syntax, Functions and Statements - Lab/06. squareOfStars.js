function squareOfStars(input) {
   let result = ``;

   if (input === undefined) {
      input = 5;
   }

   for (let i = 0; i < input; i++) {
      result += `${("*".repeat(input)).split("").join(" ")}\n`;
   }

   return result;
}

console.log(
   squareOfStars(2)
);