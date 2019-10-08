function songEncryption(input) {
   let validatePattern = /^([A-Z][a-z'\s]+):([A-Z\s]+)$/

   while ((line = input.shift()) !== "end") {
      if (validatePattern.exec(line) !== null) {
         let encryptionKey = line.split(":")[0].length;

         let encryptInfo = line
            .split("")
            .map(char => {
               if (char !== "'" && char !== " " && char !== ":") {
                  let asciiCode = char.charCodeAt();

                  if (char === char.toUpperCase()) {
                     if ((asciiCode + encryptionKey) > 90) {
                        let newKey = encryptionKey - (90 - asciiCode);
                        let newChar = String.fromCharCode(64 + newKey);

                        return newChar;
                     } else {
                        let newChar = String.fromCharCode(asciiCode + encryptionKey);

                        return newChar;
                     }
                  } else {
                     if ((asciiCode + encryptionKey) > 122) {
                        let newKey = encryptionKey - (122 - asciiCode);
                        let newChar = String.fromCharCode(96 + newKey);

                        return newChar;
                     } else {
                        let newChar = String.fromCharCode(asciiCode + encryptionKey);

                        return newChar;
                     }
                  }
               } else if (char === ":") {
                  return "@";
               } else {
                  return char;
               }
            })
            .join("");

            console.log(`Successful encryption: ${encryptInfo}`);
      } else {
         console.log("Invalid input!");
      }
   }
}

songEncryption(
   [ 'Michael Jackson:ANOTHER PART OF ME',
  'Adele:ONE AND ONLY',
  'Guns n\'roses:NOVEMBER RAIN',
  'Christina Aguilera: HuRt',
  'end' ]
)