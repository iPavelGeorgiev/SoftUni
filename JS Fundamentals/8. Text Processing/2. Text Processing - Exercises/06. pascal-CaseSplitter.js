function pascalCaseSplitter(text) {
   text = text.split("");

   for (let i = 1; i < text.length; i++) {
      if (text[i].charCodeAt(0) > 64 && text[i].charCodeAt(0) < 91) {
         text.splice(i , 0, ", ");
         i++
      }
   }

   console.log(text.join(""));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')