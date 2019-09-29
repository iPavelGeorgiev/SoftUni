function replaceRepeatingChars(text) {
   text = text.split("")
   for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i + 1]) {
         text.splice(i, 1);
         i--;
      }
   }

   console.log(text.join(""));
}

replaceRepeatingChars('aaaabbbbbcdddeeeedssaa')