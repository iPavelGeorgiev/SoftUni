function stringManipulator(input) {
   let text = "";

   while ((line = input.shift()) !== "End") {
      line = line.split(" ");
      
      if (line[0] === "Add") {
         text += line[1];
      } else if (line[0] === "Upgrade") {
         let char = line[1];
         let ascii = char.charCodeAt(0) + 1;
         let newChar = String.fromCharCode(ascii);
         let pattern = new RegExp(char, 'g');
         text = text.replace(pattern, newChar);
      } else if (line[0] === "Print") {
         console.log(text);
      } else if (line[0] === "Index") {
         let char = line[1];
         if (text.includes(char)) {
            let indices = [];
            for (let i = 0; i < text.length; i++) {
               if (text[i] === char) indices.push(i);
            }
            console.log(indices.join(" "));
         } else {
            console.log("None");
         }
      } else if (line[0] === "Remove") {
         let str = line[1];
         let pattern = new RegExp(str, 'g');

         text = text.replace(pattern, "");
      }
   }
}

stringManipulator(
   [ 'Add abracadabra',
  'Print',
  'Upgrade a',
  'Print',
  'Index b',
  'Remove bbrb',
  'Print',
  'End' ]
)