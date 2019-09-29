function postOffice(input) {
   let [first, second, third] = input[0].split("|");
   let firstPattern = /([#$&%])(?<letters>[A-Z]+)\1/;
   let secondPattern = /(?<!:)(?<ascii>\d{2}):(?<length>\d{2})(?!:)/gm;
   let thirdPattern = /\s/;
   let capitalLetters = firstPattern.exec(first).groups.letters.split("");

   while ((iteration = secondPattern.exec(second)) !== null) {
      let letter = String.fromCharCode(iteration.groups.ascii);
      let length = parseInt(iteration.groups.length);

      if (capitalLetters.includes(letter)) {
         let thirdPattern = new RegExp(`(?<![^\\s])${letter}[^\\s\\|]{${length}}(?![^\\s])`);
         let find = third.match(thirdPattern);

         if (find !== null) {
            console.log(find[0]);
         }
      }
   }
}

postOffice(
   [ 'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipw g' ]
)