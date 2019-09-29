function lettersChangeNumbers(input) {
   let strings = input.split(" ").filter(e => e !== "");
   let totalSum = 0;

   let isLowerCase = (char) => {
      return char === char.toLowerCase();
   }

   for (const string of strings) {
      let firstChar = string[0];
      let secondChar = string[string.length - 1];
      let number = Number(string.slice(1, string.length - 1))

      let firstAscii = firstChar.toLowerCase().charCodeAt(0) - 96;
      let secondAscii = secondChar.toLowerCase().charCodeAt(0) - 96;
      
      if (isLowerCase(firstChar)) {
         number *= firstAscii;
      } else {
         number /= firstAscii;
      }

      if (isLowerCase(secondChar)) {
         number += secondAscii;
      } else {
         number -= secondAscii;
      }

      totalSum += number;
   }

   console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G')