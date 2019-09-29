function valueOfAString(input) {
   let text = input.shift();
   
   for (const type of input ) {
      let totalSum = 0;

      if (type === "") break;

      for (const letter of text) {
         if (type === "UPPERCASE") {
            let ascii = letter.charCodeAt(0);

            if (ascii > 64 && ascii < 91) {
               totalSum += ascii;
            }
         } else if (type === "LOWERCASE") {
            let ascii = letter.charCodeAt(0);

            if (ascii > 96 && ascii < 123) {
               totalSum += ascii;
            }
         }
      }

         console.log(`The total sum is: ${totalSum}`);
   }
}

valueOfAString([ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ])