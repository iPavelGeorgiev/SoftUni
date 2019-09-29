function treasureFinder(input) {
   let keys = input
      .shift()
      .split(" ")
      .join("");
   let outputString = "";

   for (const text of input) {
      outputString = "";

      if (text === "find") {
         break;
      }

      for (let i = 0; i < text.length; i++) {
         let currentChar = text[i].charCodeAt(0) - keys[i % keys.length];
         outputString += String.fromCharCode(currentChar);
      }

      let treasure = outputString.split("&")[1];
      let coordinates = outputString
         .split("&")[2]
         .split("<")[1]
         .split(">")[0];

      console.log(`Found ${treasure} at ${coordinates}`);
   }
}

treasureFinder(['1 2 1 3',
   'ikegfp\'jpne)bv=41P83X@',
   'ujfufKt)Tkmyft\'duEprsfjqbvfv=53V55XA',
   'find'])