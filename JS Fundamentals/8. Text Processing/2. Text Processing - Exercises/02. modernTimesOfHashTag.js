function modernTimesOfHashTag(text) {
   let specialWords = text
      .split(" ")
      .filter(word => word.includes("#") && word.length > 1);

   for (let i = 0; i < specialWords.length; i++) {
      let word = specialWords[i].toLowerCase();
      let isValid = true;

      for (let j = 1; j < word.length; j++) {
         let asciiCode = word.charCodeAt(j);

         if (asciiCode < 97 || asciiCode > 122) {
            isValid = false;
            break;
         }
      }

      if (isValid) {
         specialWords[i] = specialWords[i].replace("#", "");
      } else {
         specialWords.splice(i, 1);
         i--
      }
   }

   console.log(specialWords.join("\n"));
}

modernTimesOfHashTag(
   'Nowadays everyone uses # to tag a #special word in #socialMedia'
)