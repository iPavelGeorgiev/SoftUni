function countWordsInAText(text) {
   let obj = {};
   let words = text[0].match(/\w+/gim);

   for (const word of words) {
      if (!obj.hasOwnProperty(word)) {
         obj[word] = 0;
      }

      obj[word] += 1;
   }

   return JSON.stringify(obj);
}

console.log(countWordsInAText(
   ["Far too slow, you're far too slow."]
));