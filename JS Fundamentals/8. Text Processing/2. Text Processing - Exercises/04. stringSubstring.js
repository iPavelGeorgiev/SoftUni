function stringSubstring(word, text) {
   let lowerCaseWord = word.toLowerCase();
   let lowerCaseText = text.toLowerCase().split(" ");
   let isFound = false;

   for (const str of lowerCaseText) {
      if (str === lowerCaseWord) {
         isFound = true;
         break;
      }
   }

   (isFound) ? console.log(word) : console.log(`${word} not found!`);
}

stringSubstring('javascript',
'JavaScript is the best programming language')