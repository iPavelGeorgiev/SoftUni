function stringManipulator(input) {
   let str = input.shift();

   while ((line = input.shift()) !== "End") {
      line = line.split(" ");
      let command = line[0];

      if (command === "Translate") {
         let char = line[1];
         let replacement = line[2];
         let pattern = new RegExp(char, "g");

         str = str.replace(pattern, replacement);
         console.log(str);
      } else if (command === "Includes") {
         let findStr = line[1];

         if (str.includes(findStr)) {
            console.log("True");
         } else {
            console.log("False");
         }
      } else if (command === "Start") {
         let startStr = line[1];

         if (str.startsWith(startStr)) {
            console.log("True");
         } else {
            console.log("False");
         }
      } else if (command === "Lowercase") {
         str = str.toLowerCase();

         console.log(str);
      } else if (command === "FindIndex") {
         let char = line[1];

         console.log(str.lastIndexOf(char));
      } else if (command === "Remove") {
         let startIndex = Number(line[1]);
         let count = Number(line[2]);

         str = str.split("");
         str.splice(startIndex, count);
         str = str.join("");
         console.log(str);
      }
   }
}

stringManipulator(
   [ '//Thi5 I5 MY 5trING!//',
  'Translate 5 s',
  'Includes string',
  'Start //This',
  'Lowercase',
  'FindIndex i',
  'Remove 0 10',
  'End' ]
)