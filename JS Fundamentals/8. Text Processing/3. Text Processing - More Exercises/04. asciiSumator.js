function asciiSumator(input) {
   let firstChar = +input.shift().charCodeAt(0);
   let lastChar = +input.shift().charCodeAt(0);
   let text = input.shift();
   let sum = 0;

   for (let i = 0; i < text.length; i++) {
      let currentChar = +text[i].charCodeAt(0);

      if (firstChar > lastChar) {
         if (currentChar < firstChar && currentChar > lastChar) {
            sum += currentChar;
         }
      } else if (lastChar > firstChar) {
         if (currentChar > firstChar && currentChar < lastChar) {
            sum += currentChar;
         }
      }
   }

   console.log(sum);
}

asciiSumator(['.', '@', 'dsg12gr5653feee5'])